<template>
  <div class="pageLogin">
    <div class="wrapper">
      <div class="form-box login">
        <h2>Login</h2>
        <form @submit.prevent="verificarLogin">
          <div class="input-box">
            <!-- <span class="icon"><ion-icon name="mail"></ion-icon></span> -->
            <input v-model="correo" type="email" required />
            <label>Email</label>
          </div>
          <div class="input-box">
            <!-- <span class="icon"><ion-icon name="lock-closed"></ion-icon></ion-icon></span> -->
            <input v-model="contraseña" type="password" required />
            <label>Contraseña</label>
          </div>
          <label v-if="error" class="error-message">
            {{ this.error }}
          </label>
          <div class="remember-forgot">
            <label><input type="checkbox" /> Recuerdame</label>
            <!-- <a href="#">Olvido su contraseña?</a> -->
            <router-link to="/" class="register-link"
              >Olvido su contraseña?</router-link
            >
          </div>
          <button id="button" type="submit" class="btn">Ingresar</button>
          <div class="login-register">
            <p>
              No tienes una cuenta?
              <!-- <a href="#" class="register-link">Registrate</a> -->
              <router-link to="/registrarse" class="register-link"
                >Registrate</router-link
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      correo: null,
      contraseña: null,
      error: null,
    };
  },
   computed: {
    ...mapState(["objetoCompartido"]),
  },
  methods: {
     ...mapMutations(["setObjetoCompartido"]),
    cambiarObjetoCompartido(objeto) {
      const nuevoObjeto = objeto;
      this.setObjetoCompartido(nuevoObjeto);
    },
    verificarLogin() {
      //se llama al metodo getAuth y se registra con el correo y contrasenia ingresados
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.correo, this.contraseña)
        .then((data) => {
          console.log("Login exitoso");

          console.log(auth.currentUser);
          const dato = auth.currentUser.email;
          //this.$router.push(`/inicio/${dato}`); //redireccion a la pagina de login

          //Aqui se busca el usuario para compartirle con los demas componentes
          const dbRef = ref(getDatabase());
          get(child(dbRef, `usuarios/`))
            .then((snapshot) => {
              if (snapshot.exists()) {
                console.log("resultado: ", snapshot.val());
                const usuariosFiltrados = Object.entries(snapshot.val())
                  .filter(
                    ([clave, usuario]) => usuario.correo === this.correo
                  )
                  .map(([clave, usuario]) => ({ clave, usuario })); // Crear un nuevo objeto con clave y valor

                if (usuariosFiltrados.length > 0) {
                  const usuarioFiltrado = usuariosFiltrados[0];
                  this.cambiarObjetoCompartido(usuarioFiltrado);
                  console.log(usuarioFiltrado);
                } else {
                  console.log(
                    "No se encontraron usuarios con el correo buscado."
                  );
                }
              } else {
                console.log("No hay datos disponibles");
              }
            })
            .catch((error) => {
              console.error(error);
            });

          this.$router.push({ path: `/${dato}` });
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/invalid-email":
              this.error = "Correo Incorrecto o No existente";
              break;
            case "auth/user-not-found":
              this.error = "Ninguna cuenta con ese correo fue encontrada";
              break;
            case "auth/wrong-password":
              this.error = "Contraseña Incorrecta";
              break;
            default:
              this.error = "Correo o contraseña incorrectas";
              break;
          }
        });
    },
  },
};
</script>

<style scoped>
.pageLogin {
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
  margin-bottom: 1150px;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 440px;
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
  font-size: 1.2em;
  font-weight: bold;
  align-content: center;
  justify-content: center;
  margin-bottom: 20px;
}
</style>