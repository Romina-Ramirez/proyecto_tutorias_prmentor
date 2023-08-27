<template>
  <Participantes v-if="objetoCompartido"></Participantes>
</template>

<script>
import Participantes from "../components/Participantes.vue";
import { mapState } from "vuex";
export default {
  components: {
    Participantes,
  },
    computed: {
    ...mapState(["objetoCompartido"]),
  },
  mounted() {
    if (this.objetoCompartido == null) {
      alert(
        "No estás logueado. Serás redirigido a la página de inicio de sesión."
      );
      this.$router.push("/login");
    }
  },
};
</script>

<style>
</style>