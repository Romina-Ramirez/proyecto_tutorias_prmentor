<template>
  <div class="container">
    <div class="containerCursos">
      <div v-if="listado" class="containerCurso">
        <img
          style="margin-top: 15px; width: 250px; height: 200px"
          id="tutorImg"
          src="https://www.pngkit.com/png/full/450-4503669_animation-cartoon-drawing-clip-art-people-animation-png.png"
          alt="No se puede mostrar la imagen."
        />
        <h1>Participantes</h1>

        <table v-if="listado" id="tabla-carros">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Roles</th>

              <th>Correo</th>
              <th>Telefono</th>
            </tr>

            <tr v-i v-for="item in listado" :key="item">
              <th>{{ item.usuario.nombre }}</th>
              <th>Estudiante</th>

              <th>{{ item.usuario.correo }}</th>
              <th>{{ item.usuario.telefono }}</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { getDatabase, ref, child, get } from "firebase/database";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      listado: null,
      item: null,
      id: null,
      nombre: null,
      correo: null,
      contraseña: null,
      telefono: null,
    };
  },
  computed: {
    ...mapState(["materia"]),
  },
  methods: {
    buscarTodos() {
      //Aqui se busca el usuario para compartirle con los demas componentes
      const dbRef = ref(getDatabase());
      get(child(dbRef, `usuarios/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log("resultado: ", Object.entries(snapshot.val()));
            console.log(
              "resultado objeto usuarios: ",
              Object.values(this.materia.participantes)
            );
            const participantesFiltrados = Object.entries(snapshot.val())
              .filter(([clave, usuario]) =>
                Object.values(this.materia.participantes).find(
                  (item) => item.valor === clave
                )
              )
              .map(([clave, usuario]) => ({ clave, usuario })); // Crear un nuevo objeto con clave y valor

            if (participantesFiltrados.length > 0) {
              this.listado = participantesFiltrados;
              console.log(participantesFiltrados);
            } else {
              console.log("No se encontraron participantes para esta materia");
            }
          } else {
            console.log("No hay datos disponibles");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    actualizarDatos() {
      //Aqui se busca el usuario para compartirle con los demas componentes
      const dbRef = ref(getDatabase());
      get(child(dbRef, `materias/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log("resultado: ", snapshot.val());
            const usuariosFiltrados = Object.entries(snapshot.val())
              .filter(
                ([clave, materia]) =>
                  materia.nombre === this.materia.nombre
              )
              .map(([clave, materia]) => ({ clave, materia })); // Crear un nuevo objeto con clave y valor

            if (usuariosFiltrados.length > 0) {
              const usuarioFiltrado = usuariosFiltrados[0];
              this.cambiarMateria(usuarioFiltrado.materia);
              console.log(usuarioFiltrado);
            } else {
              console.log("No se encontraron materias con ese nombre.");
            }
          } else {
            console.log("No hay datos disponibles");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    ...mapMutations(["setMateria"]),
    cambiarMateria(objeto) {
      const nuevoObjeto = objeto;
      this.setMateria(nuevoObjeto);
    },
  },

  mounted() {
    this.actualizarDatos();
    this.buscarTodos();
  },
};
</script>
  
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.containerCurso {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 700px;
  height: 600px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px -5px;
}
.containerCursos {
  background: #fff0de;
  /* height: 400px; */
  width: 1300px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 10px 10px 30px -15px #685b4c;
  margin-bottom: 20px;
}

.table-wrapper {
  overflow-x: auto;
}
table {
  width: 650px;
  border-collapse: collapse;
  border-spacing: 0;
  background-color: #27dbd5;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border: solid #27dbd5;
}
th,
td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #27dbd5;
}
th {
  background-color: #ffbaa1;
}
</style>