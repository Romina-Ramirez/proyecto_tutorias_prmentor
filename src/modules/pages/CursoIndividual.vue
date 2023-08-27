<template>
  <div v-if="objetoCompartido" class="container">
    <h1>{{ materia.nombre }}</h1>
    <div v-if="!inscrito" class="containerOpciones">
      <router-link to="/participantes">Participantes</router-link>
      <router-link to="/horario">Horario</router-link>
      <router-link to="/*">Progreso</router-link>
      <router-link to="/recursos">Recursos</router-link>
    </div>
    <hr />
    <div>
      <DescripcionCurso />
    </div>
  </div>
</template>

<script>
import DescripcionCurso from "../components/DescripcionCurso.vue";
import { mapState } from "vuex";

export default {
  components: {
    DescripcionCurso,
  },
  data() {
    return {
      inscrito: false,
    };
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

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.containerOpciones {
  background: #fff0de;
  border-radius: 10px 10px 0px 0px;
  padding: 15px;
  width: auto;
  margin-bottom: 0px;
}

a {
  padding-inline: 60px;
  text-decoration: none;
  color: black;
}

hr {
  width: 100%;
  margin-top: 0px;
  border: 1px solid #fff0de;
}
</style>