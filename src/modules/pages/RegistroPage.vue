<template>
  <div class="pageRegistro">
    <div class="wrapper">
      <div class="form-box registro">
        <h2>Registro de Usuario</h2>
        <form action="#/login">
          <div class="input-box">
            <!-- <span class="icon"><ion-icon name="lock-closed"></ion-icon></ion-icon></span> -->
            <input type="text" required />
            <label>Nombres Completos</label>
          </div>
          <div class="input-box">
            <!-- <span class="icon"><ion-icon name="mail"></ion-icon></span> -->
            <input type="email" required />
            <label>Email</label>
          </div>
          <div class="input-box">
            <!-- <span class="icon"><ion-icon name="lock-closed"></ion-icon></ion-icon></span> -->
            <input type="password" required />
            <label>Contraseña</label>
          </div>
          <div class="input-box">
            <!-- <span class="icon"><ion-icon name="lock-closed"></ion-icon></ion-icon></span> -->
            <input type="text" required />
            <label>Telefono</label>
          </div>
          <button type="submit" class="btn">Registrarse</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  height: 500px;
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
</style>