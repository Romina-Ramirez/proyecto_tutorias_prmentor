<template>
  <NavBar />
  <router-view />
  <Contactos v-if="final" />
</template>

<script>
import Contactos from "./modules/components/Contactos.vue";
import NavBar from "./modules/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Contactos,
  },
  data() {
    return {
      final: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.mostrarContacto);
  },
  methods: {
    mostrarContacto() {
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (fullHeight - scrollTop <= windowHeight + 40) {
        this.final = true;
      } else {
        this.final = false;
      }
    },
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
  margin-bottom: 300px;
}
</style>
