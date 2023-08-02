<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "./modules/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  }
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
}
</style>
