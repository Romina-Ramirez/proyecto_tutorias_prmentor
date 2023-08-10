<template>
  <div class="container">
    <div class="containerIzq">
      <div class="containerDatos containers">
        <div>
          <img
            id="imgPerfil"
            src="../store/usuario.png"
            alt="No se pudo mostrar la imagen."
          />
        </div>
        <div>
          <h2>Michael García</h2>
          <h3>Estudiante</h3>
          <h3>
            <font-awesome-icon icon="fa-regular fa-envelope" />
            msgarciar@uce.edu.ec
          </h3>
        </div>
      </div>
      <div class="containerAcerca containers">
        <h2>Acerca de Michael</h2>
        <hr />
        <p>
          ¡Saludos! Soy Michael, un entusiasta del aprendizaje y la exploración
          constante. A lo largo de mi vida, he tenido la fortuna de cultivar una
          variedad de intereses apasionantes. Desde sumergirme en las
          complejidades de las matemáticas y la resolución de problemas hasta
          explorar las maravillas de la literatura clásica, siempre he buscado
          ampliar mis horizontes intelectuales. Mi fascinación por la tecnología
          y la informática también me ha llevado a adentrarme en el mundo de la
          programación y el diseño web. Fuera de la academia, tengo un amor por
          el arte culinario y disfruto de la creación de platos únicos. Estoy
          emocionado de ser parte de esta plataforma de tutorías, donde puedo
          compartir mis conocimientos y aprender junto a otros apasionados del
          aprendizaje.
        </p>
      </div>
      <div class="containerAcademico containers">
        <h2>Perfil Académico</h2>
        <hr />
        <h3>Nivel educativo Actual:</h3>
        <h3>Institución educativa:</h3>
        <h3>Área de estudio</h3>
      </div>
    </div>
    <div class="containerDer">
      <div class="containerPago containers">
        <h2>Información de Paquetes</h2>
        <hr />
        <h4>Paquetes activos</h4>
        <h4>
          <font-awesome-icon icon="fa-solid fa-box-archive" />
          Paquete 1
          <font-awesome-icon icon="fa-solid fa-dollar-sign" />
          9.99
        </h4>
        <h4>
          <font-awesome-icon icon="fa-solid fa-box-archive" />
          Paquete 2
          <font-awesome-icon icon="fa-solid fa-dollar-sign" />
          14.99
        </h4>
        
        <router-link to="/paquetes">
          <font-awesome-icon icon="fa-regular fa-square-plus" /> 
          Activar paquetes
        </router-link>
      </div>
      <div class="containerEquipos containers">
        <h2>Mis cursos</h2>
        <hr />
        <h4>
          <font-awesome-icon icon="fa-solid fa-user-group" />
          Matemáticas - Impartida por: Pablo Suntaxi
        </h4>
        <h4>
          <font-awesome-icon icon="fa-solid fa-user-group" />
          Matemáticas - Impartida por: Pablo Suntaxi
        </h4>
        <h4>
          <font-awesome-icon icon="fa-solid fa-user-group" />
          Equipo 3: Matemáticas - Impartida por: Pablo Suntaxi
        </h4>
        <h4>
          <font-awesome-icon icon="fa-solid fa-user-group" />
          Equipo 4: Matemáticas - Impartida por: Pablo Suntaxi
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.containerIzq {
  width: 60%;
  margin-left: 40px;
}

.containers {
  background: #fff0de;
  border-radius: 20px;
  padding: 30px;
  margin-block: 30px;
  margin-right: 40px;
  box-shadow: 10px 10px 30px -15px #685b4c;
}
.containerDatos {
  display: flex;
  justify-content: center;
}

p {
  text-align: justify;
}

#imgPerfil {
  width: 150px;
  margin-right: 100px;
}
</style>