<template>
  <router-link id="cursoRedir" to="/cursoMatematica">
    <div class="containerCurso">
      <img
        id="materiaImg"
        src="https://cdn-icons-png.flaticon.com/128/1739/1739515.png"
        alt="No se puede mostrar la imagen."
      />
      <h3>Matemáticas</h3>
      <h5 id="descripcion">
        Aprende derivadas, logaritmos, funciones, gráficas...
      </h5>
      <div class="containerTutor">
        <img
          id="tutorImg"
          src="https://cdn-icons-png.flaticon.com/128/2566/2566158.png"
          alt="No se puede mostrar la imagen."
        />
        <h4>Pablo Suntaxi</h4>
      </div>
      <router-link id="horario" to="/horario">Ver el horario disponible.</router-link>
    </div>
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  text-decoration: none;
}

.containerCurso {
  background: white;
  width: 275px;
  height: 435px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px -5px;
}

.containerTutor {
  display: flex;
  align-items: center;
  justify-content: left;
  margin-inline: 25px;
}

h3,
h4 {
  color: black;
}

#tutorImg {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

#materiaImg {
  width: 200px;
  margin-top: 25px;
}

#descripcion {
  margin-inline: 25px;
  margin-bottom: 10px;
  text-align: justify;
  color: gray;
  font-weight: normal;
}

#horario {
  color: gray;
}
</style>