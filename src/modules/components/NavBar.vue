<template>
  <div v-if="objetoCompartido" class="container">
    <router-link v-if="objetoCompartido" @click="comprobar" :to="linkInicio">
      <img
        id="imgLogo"
        src="../store/logo_rectangulo.png"
        alt="No se pudo mostrar la imagen."
      />
    </router-link>
    <router-link v-if="ancho && objetoCompartido" to="/perfil">
      <img
        id="imgPerfil"
        src="../store/usuario.png"
        alt="No se pudo mostrar la imagen."
      />
    </router-link>
    <router-link v-if="ancho && !objetoCompartido" to="/login"
      >Login</router-link
    >
    <select v-if="!ancho" v-model="itemSeleccionado" @change="direccionarRuta">
      <option value="" disabled>Menú</option>
      <option v-for="item in items" :value="item.value" :key="item.value">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      ancho: true,
      itemSeleccionado: "",
      usuarioRegistrado: null,
      items: [{ value: "perfil", label: "Perfil", link: "/perfil" }],
      linkInicio: "",
    };
  },
  mounted() {
    window.addEventListener("resize", this.comprobarAncho);
  },
  computed: {
    ...mapState(["materia"]),
    ...mapState(["objetoCompartido"]),
    comprobar() {
      if (this.objetoCompartido != null) {
        this.linkInicio = `/${this.objetoCompartido.usuario.correo}`;
      }
    },
  },
  methods: {
    comprobarAncho() {
      if (window.innerWidth <= 1200) {
        this.ancho = false;
      } else {
        this.ancho = true;
      }
    },
    direccionarRuta() {
      const itemSeleccionado = this.items.find(
        (item) => item.value === this.itemSeleccionado
      );
      if (itemSeleccionado) {
        this.$router.push(itemSeleccionado.link);
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
* {
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  color: black;
}

#imgLogo {
  height: 45px;
  position: relative;
  top: 17px;
}

#imgPerfil {
  height: 45px;
  position: relative;
  top: 17px;
}

a {
  padding: 10px 70px;
  position: relative;
  top: -15px;
}

.container {
  background: #27dbd5;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  border-bottom: 2px solid #00afa9;
  z-index: 1000;
}
</style>