<template>
  <div class="container">
    <router-link to="/">
      <img
        id="imgLogo"
        src="../store/logo_rectangulo.png"
        alt="No se pudo mostrar la imagen."
      />
    </router-link>
    <router-link to="/cursos">Cursos</router-link>
    <router-link to="/recursos">Recursos</router-link>
    <router-link to="/contacto">Contacto</router-link>
    <router-link to="/login">
      <img
        id="imgPerfil"
        src="../store/usuario.png"
        alt="No se pudo mostrar la imagen."
      />
    </router-link>
  </div>
</template>

<script>
export default {};
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
  padding: 0px 70px;
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
  border-bottom: 2px solid #00afa9;
}
</style>