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
          <label v-if="error==true" class="error-message">
            "Correo o Contraseña Incorrectos"
          </label>
          <div class="remember-forgot">
            <label><input type="checkbox" /> Recuerdame</label>
            <!-- <a href="#">Olvido su contraseña?</a> -->
            <router-link to="/" class="register-link"
              >Olvido su contraseña?</router-link
            >
          </div>
          <button id="button" type="submit" class="btn">
            Ingresar
          </button>
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
import { loginUsuarioFachada } from "../helpers/UsuarioCliente";
export default {
  data() {
    return {
      correo: null,
      contraseña: null,
      error:false
    };
  },
  methods: {
    async verificarLogin() {
      const data = {
        correo: this.correo,
        contraseña: this.contraseña,
      };
      const mensaje=await loginUsuarioFachada(data);
      console.log("Mensaje en el login "+mensaje)
      this.error=mensaje;
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