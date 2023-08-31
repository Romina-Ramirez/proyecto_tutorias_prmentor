<template>
  <div>
    <h4>{{ materia.nombre }}</h4>
    <div v-if="mostrar == true" class="reunion">
      <label>Numero de Reunion:</label>
      <input v-model="meetingNumber" type="number" />
      <label>Codigo de Acceso:</label>
      <input v-model="passWord" type="text" />
      <label>Nombre:</label>
      <input v-model="userName" type="text" />
      <button @click="joinMeeting">Unirse a la reunion</button>
    </div>
  </div>
  <div id="meetingSDKElement">
    <!-- Meeting SDK renders here when a user starts or joins a Zoom meeting -->
  </div>
</template>

<script>
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";
import { KJUR } from "jsrsasign";
import { mapState } from "vuex";

export default {
  data() {
    return {
      client: ZoomMtgEmbedded.createClient(),
      sdkKey: "CsCFZldCTjKt0ANDP4hZg",
      sdkSecret: "TMe18yAF2e2NvOGRhXrvW4056ZAEazK9",
      meetingNumber: 81003559244,
      passWord: "x79Lpt",
      userName: "Mike",
      userMail: "",
      role: 0,
      leaveUrl: "https://prmentor-tutorias.web.app",
      mostrar: true,
    };
  },
  computed: {
    ...mapState(["materia"]),
    ...mapState(["objetoCompartido"]),
  },
  mounted() {
    if (this.objetoCompartido == null) {
      alert(
        "No estás logueado. Serás redirigido a la página de inicio de sesión."
      );
      this.$router.push("/login");
    }else{
      this.userName = this.objetoCompartido.usuario.nombre;
    }
    
  },
  methods: {
    generateSignature() {
      const iat = Math.round(new Date().getTime() / 1000) - 30;
      const exp = iat + 60 * 60 * 2;
      const oHeader = { alg: "HS256", typ: "JWT" };

      const oPayload = {
        sdkKey: this.sdkKey,
        appKey: this.sdkKey,
        mn: this.meetingNumber,
        role: this.role,
        iat: iat,
        exp: exp,
        tokenExp: exp,
      };

      const sHeader = JSON.stringify(oHeader);
      const sPayload = JSON.stringify(oPayload);
      const sdkJWT = KJUR.jws.JWS.sign(
        "HS256",
        sHeader,
        sPayload,
        this.sdkSecret
      );
      console.log("Objeto---> ", oPayload);
      console.log("Firma---> ", sdkJWT);
      return sdkJWT;
    },
    joinMeeting() {
      this.mostrar = false;
      let meetingSDKElement = document.getElementById("meetingSDKElement");

      this.client.init({
        debug: true,
        zoomAppRoot: meetingSDKElement,
        leaveUrl: this.leaveUrl,
        language: "es-Es",
        customize: {
          video: {
            isResizable: true,
            viewSizes: {
              default: {
                width: 1080,
                height: 600,
              },
            },
          },
          meetingInfo: [
            "topic",
            "host",
            "mn",
            "pwd",
            "telPwd",
            "invite",
            "participant",
            "dc",
            "enctype",
          ],
        },
      });

      const signatureF = this.generateSignature();
      console.log("Firma---> ", signatureF);
      console.log("pasword---> ", this.passWord);
      const obj = {
        sdkKey: this.sdkKey,
        signature: signatureF, // role in SDK signature needs to be 0
        meetingNumber: this.meetingNumber,
        password: this.passWord,
        userName: this.userName,
      };
      console.log("obj --> ", obj);
      this.client.join(obj);
    },
  },
};
</script>

<style scoped>
#meetingSDKElement {
  top: 59px !important;
  left: 0 !important;
  right: 0;
  margin-left: 180px;
  margin-right: auto;
  width: 244px; /* width of speaker and ribbon view */
}

.reunion label,
.reunion input {
  margin: 0px 15px;
}

.reunion button {
  background-color: #2d8cff;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.reunion button:hover {
  background-color: #2681f2;
}
</style>