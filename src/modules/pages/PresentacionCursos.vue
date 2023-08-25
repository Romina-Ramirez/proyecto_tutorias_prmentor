<template>
  <div class="container">
    <div class="containerBanner">
      <h1>Mejora tus habilidades en la materia que decidas</h1>
      <img
        id="imgBanner"
        src="../store/tutorias_banner.jpg"
        alt="No se pudo mostrar la imagen."
      />
      <h2>Descubre un mundo de conocimiento a tu alcance.</h2>
    </div>
    <div class="containerCursos">
      <div class="containerFiltros">
        <div class="containerSearch">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          <input type="search" id="inputSearch" placeholder="Buscar..." />
        </div>
        <h3 class="filtro">DESCUBRE</h3>
        <h3>Más valorados</h3>
        <h3>Tendencias</h3>
        <h3>Más nuevos</h3>
        <h3 class="filtro2">CATEGORIAS</h3>
        <h3>MÁS FILTROS</h3>
      </div>
      <div class="containerComponentes">
        <CursoPCVue id="componenteCursos" />
      </div>
    </div>
    <div class="containerBotones">
      <button id="btnAnterior" disabled>Anterior</button>
      <button id="btnSiguiente">Siguiente</button>
    </div>
  </div>
</template>



<script>
import CursoPCVue from "../components/CursoPC.vue";
export default {
  data() {
    return {
      ancho: true,
    };
  },
  components: {
    CursoPCVue,
  },
  methods: {
    comprobarAncho() {
      if (window.innerWidth <= 1152) {
        this.ancho = false;
      } else {
        this.ancho = true;
      }
    },
  },
  mounted(){
    console.log(this.$route.params.dato)
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.containerBanner {
  background: #fff0de;
  height: 400px;
  width: 1300px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  align-items: center;
  box-shadow: 10px 10px 30px -15px #685b4c;
  margin: 20px 0px 40px 0px;
}

.containerSearch {
  border: 2px solid black;
  border-radius: 15px;
  display: flex;
  align-items: center;
  background: white;
  padding: 5px 10px;
}

.containerComponentes {
  display: flex;
  align-items: center;
  justify-content: center;
}

#imgBanner {
  width: 500px;
  grid-row: span 2;
}

h1 {
  font-size: 50px;
  margin-inline: 85px;
  margin-bottom: 0px;
}

h2 {
  font-size: 35px;
  margin-inline: 85px;
  font-weight: normal;
  margin-top: 0px;
}

h3 {
  font-weight: normal;
  color: gray;
}

.containerCursos {
  background: #fff0de;
  /* height: 400px; */
  width: 1300px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 0.3fr 1.7fr;
  padding: 20px;
  align-items: center;
  box-shadow: 10px 10px 30px -15px #685b4c;
  margin-bottom: 20px;
}

.containerFiltros {
  text-align: left;
  margin-left: 20px;
  margin-right: 50px;
}

#inputSearch {
  border-radius: 15px;
  border: none;
  padding-left: 5px;
}

#inputSearch:focus {
  outline: none;
}

button {
  border: none;
  padding: 5px 40px;
  border-radius: none;
  font-size: 16px;
  cursor: pointer;
  background: white;
}

#btnAnterior {
  border-radius: 10px 0px 0px 10px;
}

#btnSiguiente {
  border-radius: 0px 10px 10px 0px;
}

#btnAnterior:disabled {
  background: lightgray;
  color: black;
  cursor: default;
}

.filtro {
  margin-top: 30px;
  color: black;
  font-size: 25px;
  font-weight: bold;
}

.filtro2 {
  margin-top: 50px;
}

#componenteCursos {
  margin-block: 20px;
  margin-inline: 20px;
  width: 275px;
}
</style>