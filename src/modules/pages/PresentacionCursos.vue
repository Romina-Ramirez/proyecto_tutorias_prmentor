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
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <input type="search" id="inputSearch" placeholder="Buscar..." />
        <h2 class="filtro">DESCUBRE</h2>
        <h3>Más valorados</h3>
        <h3>Tendencias</h3>
        <h3>Más nuevos</h3>
        <h3 class="filtro2">CATEGORIAS</h3>
        <h3>MÁS FILTROS</h3>
      </div>
      <div class="containerComponentes"></div>
    </div>
    <div class="containerBotones">
      <button id="btnAnterior" disabled>Anterior</button>
      <button id="btnSiguiente">Siguiente</button>
    </div>
  </div>
</template>



<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  height: 400px;
  width: 1300px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 0.3fr 1.7fr;
  padding: 20px;
  align-items: center;
  box-shadow: 10px 10px 30px -15px #685b4c;
  margin-bottom: 20px;
}

#inputSearch {
  border-radius: 15px;
  padding: 5px 10px;
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
}

.filtro {
  margin-top: 30px;
}

.filtro2 {
  margin-top: 50px;
}
</style>