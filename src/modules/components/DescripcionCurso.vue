<template>
  <div class="container">
    <div class="containerDescripcion">
        <img
          id="materiaImg"
          src="https://img.freepik.com/vector-premium/doodle-matematicas-formulas-matematicas-dibujadas-mano-pizarra-portada-libro-banner-fondo-etc-industria-educacion-teoria-matematica-educacion-escolar_93083-3366.jpg"
          alt="No se puede mostrar la imagen."
        />
      <p>
        El curso en línea de matemáticas es una experiencia educativa
        interactiva y accesible. Con contenido actualizado y ejercicios
        prácticos, ofrece una sólida comprensión de conceptos clave, desde
        álgebra hasta cálculo.
      </p>
    </div>
    <div class="containerTutor">
      <h2>Tutor</h2>
      <img
        id="tutorImg"
        src="https://cdn-icons-png.flaticon.com/128/2566/2566158.png"
        alt="No se puede mostrar la imagen."
      />
      <h3>Nombre: Pablo Suntaxi</h3>
      <h3>Email: pasuntaxih@uce.edu.ec</h3>
    </div>
    <button id="button">Inscribirse</button>
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