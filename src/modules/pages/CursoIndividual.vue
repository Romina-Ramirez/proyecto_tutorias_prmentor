<template>
  <div class="container">
    <h1>Matemáticas</h1>
    <div class="containerOpciones">
      <router-link to="/*">Participantes</router-link>
      <router-link to="/*">Horario</router-link>
      <router-link to="/*">Progreso</router-link>
    </div>
    <hr />
    <div class="containerDescripcion">
      <p>
        <img
        id="materiaImg"
          src="https://img.freepik.com/vector-premium/doodle-matematicas-formulas-matematicas-dibujadas-mano-pizarra-portada-libro-banner-fondo-etc-industria-educacion-teoria-matematica-educacion-escolar_93083-3366.jpg"
          alt="No se puede mostrar la imagen."
        />
        El curso en línea de matemáticas es una experiencia educativa
        interactiva y accesible. Con contenido actualizado y ejercicios
        prácticos, ofrece una sólida comprensión de conceptos clave, desde
        álgebra hasta cálculo.
      </p>
    </div>
    <div class="containerTutor">
      <h2>Tutor</h2>
      <img id="tutorImg" src="https://cdn-icons-png.flaticon.com/128/2566/2566158.png" alt="No se puede mostrar la imagen." />
      <h3>Nombre: Pablo Suntaxi</h3>
      <h3>Email: pasuntaxih@uce.edu.ec</h3>
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
  text-align: center;
  align-items: center;
}

.containerOpciones {
  background: #fff0de;
  border-radius: 10px 10px 0px 0px;
  padding: 15px;
  width: 600px;
  margin-bottom: 0px;
}

.containerDescripcion {
  display: flex;
  padding: 30px;
  background: #fff0de;
  border-radius: 20px;
  width: 550px;
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
  width: 550px;
  margin-top: 30px;
  box-shadow: 10px 10px 30px -15px #685b4c;
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

p {
    text-align: justify;
    margin-block: 0px;
    font-size: 20px;
}

#materiaImg {
    float: left;
    height: 200px;
    margin-right: 20px;
}

#tutorImg {
    height: 100px;
    width: 100px;
}
</style>