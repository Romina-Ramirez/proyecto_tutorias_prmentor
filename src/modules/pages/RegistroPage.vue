<template>
  <div class="pageRegistro">
    <div class="wrapper">
      <div class="form-box registro">
        <h2>Registro de Usuario</h2>
        <form @submit.prevent="registrarse">
          <div class="input-box">
            <!-- <span class="icon"><ion-icon name="lock-closed"></ion-icon></ion-icon></span> -->
            <input v-model="usuario.nombre" type="text" required />
            <label>Nombres Completos</label>
          </div>
          <div class="input-box">
            <!-- <span class="icon"><ion-icon name="mail"></ion-icon></span> -->
            <input v-model="usuario.correo" type="email" required />
            <label>Email</label>
          </div>
          <label v-if="error == true" class="error-message">
            Correo Ya Registrado
          </label>
          <div class="input-box">
            <!-- <span class="icon"><ion-icon name="lock-closed"></ion-icon></ion-icon></span> -->
            <input v-model="usuario.contraseña" type="password" required />
            <label>Contraseña</label>
          </div>
          <div class="input-box">
            <!-- <span class="icon"><ion-icon name="lock-closed"></ion-icon></ion-icon></span> -->
            <input v-model="usuario.telefono" type="text" required />
            <label>Teléfono</label>
          </div>
          <button id="button" type="submit" class="btn">Registrarse</button>
        </form>
        <button id="button" @click="registrarseConGoogle">
          Registrarse con Google
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDatabase, ref as dRef, set, push} from "firebase/database";

export default {
  data() {
    return {
      error: null,
      usuario: {
        nombre: "",
        rol: "estudiante",
        correo: "",
        horas_disponibles: 0,
        foto_perfil: "",
        telefono: "",
        contraseña: "",
      },
    };
  },
  methods: {
    //metodo de registro de usuario con firebase
    registrarse() {
      //se llama al metodo getAuth y se registra con el correo y contrasenia ingresados
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        this.usuario.correo,
        this.usuario.contraseña
      )
        .then((data) => {
          console.log("Registro exitoso");
          this.agregarUsuario();
          console.log(auth.currentUser);
          this.$router.push("/login"); //redireccion a la pagina de login
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
          this.error = error.message;
        });
    },

    registrarseConGoogle() {
      //se llama al metodo getAuth y se registra con el correo y contrasenia ingresados
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          const data = result.user;
          console.log(data);
          this.usuario.correo = data.email;
          this.usuario.nombre = data.displayName;
          this.usuario.telefono =
            data.phoneNumber !== null ? data.phoneNumber : "";
          this.usuario.contraseña = "";
          this.usuario.foto_perfil = data.photoURL == null ? data.photoURL : "";
          this.agregarUsuario();
          this.$router.push("/");

          console.log("registro exitoso");
        })
        .catch((error) => {
          //manejar el error
          this.error = error.message;
        });
    },

    agregarUsuario() {
      const db = getDatabase();
      const usuariosRef = dRef(db, "usuarios/");

      const nuevoUsuarioRef = push(usuariosRef); // Generar un nuevo ID único para el usuario

      set(nuevoUsuarioRef, this.usuario)
        .then(() => {
          console.log("Usuario agregado exitosamente a Firebase.");
        })
        .catch((error) => {
          console.error("Error al agregar usuario a Firebase:", error);
        });
    },
  },
};
</script>

<style scoped>
.pageRegistro {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../store/background_login.jpg");
  background-position: center;
  background-size: cover;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 600px;
  background: #ffebd2;
  border: 6px solid #93e3d4;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}
.wrapper .form-box {
  width: 100%;
  padding: 40px;
}
.form-box h2 {
  font-size: 2.2em;
  color: #000000;
  text-align: center;
}
.input-box {
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #1d1b1b;
  margin: 30px 0;
}
.input-box label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1em;
  color: #ff5555;
  font-weight: 500;
  pointer-events: none;
  transition: 0.5s;
}
.input-box input:focus ~ label,
.input-box input:valid ~ label {
  top: -5px;
}
.input-box input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.1em;
  color: #1d1b1b;
  font-weight: 600;
}
.input-box .icon {
  position: absolute;
  right: 8px;
  font-size: 1.2em;
  color: #1d1b1b;
  line-height: 57px;
}

.error-message {
  display: flex;
  color: #ff5555;
  font-weight: bold;
  align-content: center;
  justify-content: center;
  margin: 14px;
}

#button {
  margin-top: 10px;
}
</style>