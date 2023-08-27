<template>
  <HorarioClase v-if="objetoCompartido" />
</template>

<script>
import HorarioClase from "../components/HorarioClase.vue";
import { mapState } from "vuex";

export default {
  components: {
    HorarioClase,
  },
  computed: {
    ...mapState(["materia"]),
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