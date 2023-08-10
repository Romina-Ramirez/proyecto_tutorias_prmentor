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

        <table id="tabla-carros">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Roles</th>

              <th>Correo</th>
              <th>Telefono</th>
            </tr>

            <tr v-for="item in listado" :key="item">
              <th>{{ item.nombre }}</th>
              <th>Estudiante</th>

              <th>{{ item.correo }}</th>
              <th>{{ item.telefono }}</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>
  
  <script>

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

  methods: {
     buscarTodos() {

      var listaDeObjetos = [
        {
          id: 2,
          nombre: "Mia",
          correo: "dhfbhnf@jffj",
          contraseña: "1234",
          telefono: "099999",
        },
        {
          id: 3,
          nombre: "Lana",
          correo: "dhfbhnf@jffj",
          contraseña: "1111",
          telefono: "099999",
        },
        {
          id: 4,
          nombre: "Nekane",
          correo: "dhfbhnf@jffj",
          contraseña: "2222",
          telefono: "099999",
        },
        {
          id: 5,
          nombre: "Jordi",
          correo: "dhfbhnf@jffj",
          contraseña: "3333",
          telefono: "099999",
        },
        {
          id: 6,
          nombre: "Riley",
          correo: "dhfbhnf@jffj",
          contraseña: "4444",
          telefono: "099999",
        },
      ];
      this.listado = listaDeObjetos;
    },
  },

  mounted() {
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