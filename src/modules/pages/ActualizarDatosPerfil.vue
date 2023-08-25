<template>
  <div class="wrapper">
    <div class="form-box registro">
      <h2>Actualizacion de Datos</h2>
      <form @submit="actualizar">
        <div class="input-box">
          <input v-model="usuario.nombre" type="text" required />
          <label>Nombres Completos</label>
        </div>
        <div class="input-box">
          <input v-model="usuario.telefono" type="text" required/>
          <label>Teléfono</label>
        </div>
        <div class="input-box">
          <input v-model="usuario.nivelEd" type="text"/>
          <label>Nivel educativo Actual</label>
        </div>
        <div class="input-box">
          <input v-model="usuario.institucion" type="text"/>
          <label>Institucion Educativa</label>
        </div>
        <div class="input-box">
          <input v-model="usuario.carrera" type="text"/>
          <label>Carrera o Area de Estudio</label>
        </div>
        <button id="button" type="submit" class="btn">Actualizar Datos</button>
      </form>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref as dRef, set, push } from "firebase/database";

export default {
  data() {
    return {
      error: null,
      usuario: {
        nombre: "",
        telefono: "",
        institucion:"",
        nivelEd:"",
        carrera:""
      },
    };
  },
  methods: {
    //metodo de registro de usuario con firebase
    actualizar() {
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
  }
};
</script>

<style>
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