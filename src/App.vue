<template>
  <NavBar />
  <router-view />
  <Contactos></Contactos>

</template>

<script>
import NavBar from "./modules/components/NavBar.vue";
import Contactos from "./modules/components/Contactos.vue"

export default {
  name: "App",
  components: {
    NavBar,
    Contactos
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 100px;
  margin-bottom:300px;

}
</style>
