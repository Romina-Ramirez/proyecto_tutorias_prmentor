<template>
    <h1>404</h1>
    <p>Página no encontrada.</p>
</template>

<script>
import { mapState } from "vuex";
export default {
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

<style scoped>
h1 {
  font-size: 60px;
}

p {
  font-size: 40px;
}
</style>