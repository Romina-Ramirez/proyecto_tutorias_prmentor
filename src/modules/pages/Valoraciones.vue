<template>
  <div v-if="listado">
    <ComentarioVue
      v-for="item in listado"
      :key="item.clave"
      :fecha="item.comentario.fecha"
      :texto="item.comentario.texto"
      :value="item.comentario.valoracion"
      :usuario="item.comentario.nombre"
      :max-stars="5"
    />
  </div>
  <AñadirComentarioVue :valor="rating" />
  <EstrellasVue :value="rating" v-model="userRating" :max-stars="5" />
  <p>Tu valoración: {{ rating }}/5</p>
</template>

<script>
import AñadirComentarioVue from "../components/AñadirComentario.vue";
import ComentarioVue from "../components/Comentario.vue";
import EstrellasVue from "../components/Estrellas.vue";
import { mapState, mapMutations } from "vuex";
import {
  getDatabase,
  ref,
  child,
  push,
  update,
  set,
  get,
} from "firebase/database";

export default {
  components: {
    ComentarioVue,
    AñadirComentarioVue,
    EstrellasVue,
  },
  data() {
    return {
      userRating: 0,
      listado: null,
    };
  },
  computed: {
    ...mapState(["rating"]),
    ...mapState(["materia"]),
  },
  methods: {
    cargarMaterias() {
      //Aqui se busca el usuario para compartirle con los demas componentes
      const dbRef = ref(getDatabase());
      get(child(dbRef, `comentarios/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log("resultado: ", Object.entries(snapshot.val()));
            const materiasFiltradas = Object.entries(snapshot.val())
              .filter(
                ([clave, comentario]) =>
                  comentario.clave_materia === this.materia.codigo
              )
              .map(([clave, comentario]) => ({ clave, comentario })); // Crear un nuevo objeto con clave y valor

            if (materiasFiltradas.length > 0) {
              this.listado = materiasFiltradas;
              console.log(materiasFiltradas);
            } else {
              console.log("No se encontraron comentarios para este usuario");
            }
          } else {
            console.log("No hay datos disponibles");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.cargarMaterias();
  },
};
</script>

<style>
</style>