<template>
  <div class="container">
    <router-link to="/">
      <img
        id="imgLogo"
        src="../store/logo_rectangulo.png"
        alt="No se pudo mostrar la imagen."
      />
    </router-link>
    <router-link v-if="ancho" to="/contacto">Contacto</router-link>
    <router-link v-if="ancho && !usuarioRegistrado" to="/perfil">
      <img
        id="imgPerfil"
        src="../store/usuario.png"
        alt="No se pudo mostrar la imagen."
      />
    </router-link>
    <router-link v-if="ancho && usuarioRegistrado" to="/login">Login</router-link>
    <select v-if="!ancho" v-model="itemSeleccionado" @change="direccionarRuta">
      <option value="" disabled>Menú</option>
      <option v-for="item in items" :value="item.value" :key="item.value">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ancho: true,
      itemSeleccionado: "",
      items: [
        { value: "contacto", label: "Contacto", link: "/contacto" },
        { value: "perfil", label: "Perfil", link: "/perfil" },
      ],
    };
  },
  mounted() {
    window.addEventListener("resize", this.comprobarAncho);
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