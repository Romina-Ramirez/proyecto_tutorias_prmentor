<template>
  <div class="container">
    <div class="containerDescripcion">
      <img
        id="materiaImg"
        :src="materia.imagen"
        alt="No se puede mostrar la imagen."
      />
      <p>
        {{ materia.descripcionl }}
      </p>
    </div>
    <div class="containerTutor">
      <h2>Tutor</h2>
      <img
        id="tutorImg"
        src="https://cdn-icons-png.flaticon.com/128/2566/2566158.png"
        alt="No se puede mostrar la imagen."
      />
      <h3>Nombre: {{ materia.tutor }}</h3>
      <h3>Email: pasuntaxih@uce.edu.ec</h3>
    </div>
    <button v-if="inscrito == false" id="button" @click="registrarMateria">
      Inscribirse
    </button>
    <router-link v-else :to="linkReunion">
      <button id="button" @click="actualizar">Unirse a la reunion</button>
    </router-link>
    <router-link to="/valoraciones">
      <button id="btn-val">Calificar curso</button>
    </router-link>
  </div>
</template>

<script>
import {
  getDatabase,
  ref,
  child,
  push,
  update,
  set,
  get,
} from "firebase/database";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      inscrito: false,
      linkReunion: "",
    };
  },
  computed: {
    ...mapState(["materia"]),
    ...mapState(["objetoCompartido"]),
  },
  methods: {
    ...mapMutations(["setObjetoCompartido"]),
    ...mapMutations(["setMateria"]),
    cambiarObjetoCompartido(objeto) {
      const nuevoObjeto = objeto;
      this.setObjetoCompartido(nuevoObjeto);
    },
    cambiarMateria(objeto) {
      const nuevoObjeto = objeto;
      this.setMateria(nuevoObjeto);
    },
    registrarMateria() {
      const clave = this.objetoCompartido.clave;

      const db = getDatabase();

      const materiasRef = ref(db, "usuarios/" + clave + "/materias/");

      const nuevaMateriaRef = push(materiasRef);
      if (this.objetoCompartido.usuario.nMaterias != 0) {
        set(nuevaMateriaRef, { valor: this.materia.nombre })
          .then(() => {
            console.log("materia al usuario agregado exitosamente a Firebase.");
            this.inscrito = true;
          })
          .catch((error) => {
            console.error(
              "Error al agregar materia al usuario a Firebase:",
              error
            );
            this.inscrito = false;
          });

        //aqui se agrega el participante al curso
        const claveMateria = this.materia.codigo;
        const claveUsuario = this.objetoCompartido.clave;
        const materias2Ref = ref(
          db,
          "materias/" + claveMateria + "/participantes/"
        );

        const nuevaMateria2Ref = push(materias2Ref);
        if (
          this.materia.participantes == null ||
          Object.entries(this.materia.participantes).length <= 30
        ) {
          set(nuevaMateria2Ref, { valor: claveUsuario })
            .then(() => {
              console.log(
                "usuario agregadado a la materia exitosamente a Firebase."
              );
              this.actualizarDatos();
              this.inscrito = true;
            })
            .catch((error) => {
              console.error(
                "Error al agregar usuario a la materia a Firebase:",
                error
              );
              this.inscrito = false;
            });

          this.$router.push("/cursoMatematica");
        } else {
          alert("¡Hola, este curso esta lleno, no puedes inscribirte! ;) ");
        }
      } else {
        alert(
          "¡Hola, no tienes acceso a mas materias. Puedes comprar mas paquetes en tu perfil para acceder a mas materias! ;) "
        );
      }
    },
    actualizarDatos() {
      //Aqui se busca el usuario para compartirle con los demas componentes
      const dbRef = ref(getDatabase());
      get(child(dbRef, `usuarios/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log("resultado: ", snapshot.val());
            const usuariosFiltrados = Object.entries(snapshot.val())
              .filter(
                ([clave, usuario]) =>
                  usuario.correo === this.objetoCompartido.usuario.correo
              )
              .map(([clave, usuario]) => ({ clave, usuario })); // Crear un nuevo objeto con clave y valor

            if (usuariosFiltrados.length > 0) {
              const usuarioFiltrado = usuariosFiltrados[0];
              this.cambiarObjetoCompartido(usuarioFiltrado);
              this.objetoCompartido.usuario.nMaterias -= 1;
              const postData = this.objetoCompartido.usuario;

              // Write the new post's data simultaneously in the posts list and the user's post list.
              const updates = {};
              updates["/usuarios/" + this.objetoCompartido.clave] = postData;
              const retorno = update(dbRef, updates);
              console.log(retorno);
              console.log(usuarioFiltrado);
            } else {
              console.log("No se encontraron usuarios con el correo buscado.");
            }
          } else {
            console.log("No hay datos disponibles");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    actualizar() {
      const db = getDatabase();

      if (this.objetoCompartido.usuario.horas_disponibles >= 2) {
        this.linkReunion = "/zoom";
        this.objetoCompartido.usuario.horas_disponibles -= 2;

        // A post entry.
        const postData = this.objetoCompartido.usuario;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        const updates = {};
        updates["/usuarios/" + this.objetoCompartido.clave] = postData;
        const retorno = update(ref(db), updates);
        console.log(retorno);
      } else {
        this.linkReunion = `/${this.objetoCompartido.usuario.correo}`;
        alert(
          "¡No te quedan horas disponibles!, En tu perfil puedes contratar un nuevo paquete para mas horas ;) "
        );
      }
    },
  },
  mounted() {
    if (
      this.objetoCompartido.usuario.materias &&
      Object.values(this.objetoCompartido.usuario.materias).find(
        (item) => item.valor === this.materia.nombre
      )
    ) {
      console.log(
        "Entro al true ",
        Object.values(this.objetoCompartido.usuario.materias)
      );
      this.inscrito = true;
    } else {
      console.log("Entro al false ");
      this.inscrito = false;
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

.containerDescripcion {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: #fff0de;
  border-radius: 20px;
  width: 75%;
  margin-top: 10px;
  box-shadow: 10px 10px 30px -15px #685b4c;
}

.containerTutor {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: #fff0de;
  border-radius: 20px;
  width: 75%;
  margin-top: 30px;
  box-shadow: 10px 10px 30px -15px #685b4c;
}

p {
  text-align: justify;
  margin-block: 0px;
  font-size: 20px;
}

#materiaImg {
  height: 200px;
  width: auto;
  margin-bottom: 20px;
}

#tutorImg {
  height: 100px;
  width: 100px;
}
</style>