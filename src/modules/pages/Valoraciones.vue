<template>
  <ComentarioVue />
  <AñadirComentarioVue />
  <EstrellasVue :value="userRating" v-model="userRating" :max-stars="5" />
  <p>Tu valoración: {{ userRating }}/5</p>
</template>

<script>
import AñadirComentarioVue from "../components/AñadirComentario.vue";
import ComentarioVue from "../components/Comentario.vue";
import EstrellasVue from "../components/Estrellas.vue";

export default {
  components: {
    ComentarioVue,
    AñadirComentarioVue,
    EstrellasVue,
  },
  data() {
    return {
      userRating: 0,
    };
  },
};
</script>

<style>
</style>