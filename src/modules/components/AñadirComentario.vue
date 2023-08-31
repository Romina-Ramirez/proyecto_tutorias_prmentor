<template>
  <div class="container">
    <input
      type="text"
      placeholder="Añade un nuevo comentario"
      v-model="comentario.texto"
    />
    <font-awesome-icon
      icon="fa-regular fa-paper-plane"
      size="xl"
      @click="agregarComentario()"
    />
  </div>
</template>

<script>
import { getDatabase, ref, child, push, update, set } from "firebase/database";
import { mapState, mapMutations } from "vuex";
export default {
  props: ["valor"],
  data() {
    return {
      comentario: {
        nombre: "",
        fecha: "",
        texto: "",
        valoracion: 0,
        clave_usuario: "",
        clave_materia: "",
      },
    };
  },
  computed: {
    ...mapState(["objetoCompartido"]),
    ...mapState(["materia"]),
    ...mapState(["rating"]),
  },
  methods: {
    agregarComentario() {
      this.comentario.nombre = this.objetoCompartido.usuario.nombre;
      this.comentario.clave_usuario = this.objetoCompartido.clave;
      this.comentario.clave_materia = this.materia.codigo;

      var fechaHoraActual = new Date();

      var fechaHoraFormateada = fechaHoraActual.toISOString();
      this.comentario.fecha = fechaHoraFormateada;
      this.comentario.valoracion = this.rating;
      const db = getDatabase();
      const pagosRef = ref(db, "comentarios/");

      const nuevoPagoRef = push(pagosRef); // Generar un nuevo ID único para el comentario

      set(nuevoPagoRef, this.comentario)
        .then(() => {
          console.log("Comentario agregado exitosamente a Firebase.");
          this.cambiarRating(0);
        })
        .catch((error) => {
          console.error("Error al agregar el comentario a Firebase:", error);
        });

      this.$router.push("/cursoMatematica");
    },
    ...mapMutations(["setRating"]),
    cambiarRating(objeto) {
      const nuevoObjeto = objeto;
      this.setRating(nuevoObjeto);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

svg {
  margin-block: 30px;
  margin-right: 30px;
  cursor: pointer;
}

input {
  margin: 30px;
  width: 94%;
  height: 30px;
  font-size: 20px;
  padding-inline: 20px;
}
</style>