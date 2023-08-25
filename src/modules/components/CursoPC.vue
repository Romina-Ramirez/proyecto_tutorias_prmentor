<template>
  <div class="casilleroCursos">
    <router-link id="cursoRedir" to="/cursoMatematica">
      <div class="containerCurso">
        <img
          id="materiaImg"
          :src=m2.imagen
          alt="No se puede mostrar la imagen."
        />
        <h3>{{ m1.nombre }}</h3>
        <h5 id="descripcion">
          {{ m1.descripcion }}
        </h5>
        <div class="containerTutor">
          <img
            id="tutorImg"
            src="https://cdn-icons-png.flaticon.com/128/2566/2566158.png"
            alt="No se puede mostrar la imagen."
          />
          <h4>{{ m1.tutor }}</h4>
        </div>
        <router-link id="horario" to="/horario"
          >Ver el horario disponible.</router-link
        >
      </div>
    </router-link>

    <router-link id="cursoRedir" to="/cursoMatematica">
      <div class="containerCurso">
        <img
          id="materiaImg"
          :src=m2.imagen
          alt="No se puede mostrar la imagen."
        />
        <h3>{{ m2.nombre }}</h3>
        <h5 id="descripcion">
          {{ m2.descripcion }}
        </h5>
        <div class="containerTutor">
          <img
            id="tutorImg"
            src="https://cdn-icons-png.flaticon.com/128/2566/2566158.png"
            alt="No se puede mostrar la imagen."
          />
          <h4>{{ m2.tutor }}</h4>
        </div>
        <router-link id="horario" to="/horario"
          >Ver el horario disponible.</router-link
        >
      </div>
    </router-link>

    <router-link id="cursoRedir" to="/cursoMatematica">
      <div class="containerCurso">
        <img
          id="materiaImg"
          :src=m3.imagen
          alt="No se puede mostrar la imagen."
        />
        <h3>{{ m3.nombre }}</h3>
        <h5 id="descripcion">
          {{ m3.descripcion }}
        </h5>
        <div class="containerTutor">
          <img
            id="tutorImg"
            src="https://cdn-icons-png.flaticon.com/128/2566/2566158.png"
            alt="No se puede mostrar la imagen."
          />
          <h4>{{ m3.tutor }}</h4>
        </div>
        <router-link id="horario" to="/horario"
          >Ver el horario disponible.</router-link
        >
      </div>
    </router-link>

    <router-link id="cursoRedir" to="/cursoMatematica">
      <div class="containerCurso">
        <img
          id="materiaImg"
          :src=m4.imagen
          alt="No se puede mostrar la imagen"
        />
        <h3>{{ m4.nombre }}</h3>
        <h5 id="descripcion">
          {{ m4.descripcion }}
        </h5>
        <div class="containerTutor">
          <img
            id="tutorImg"
            src="https://cdn-icons-png.flaticon.com/128/2566/2566158.png"
            alt="No se puede mostrar la imagen."
          />
          <h4>{{ m4.tutor }}</h4>
        </div>
        <router-link id="horario" to="/horario"
          >Ver el horario disponible.</router-link
        >
      </div>
    </router-link>

    <router-link id="cursoRedir" to="/cursoMatematica">
      <div class="containerCurso">
        <img
          id="materiaImg"
          :src=m5.imagen
          alt="No se puede mostrar la imagen."
        />
        <h3>{{ m5.nombre }}</h3>
        <h5 id="descripcion">
          {{ m5.descripcion }}
        </h5>
        <div class="containerTutor">
          <img
            id="tutorImg"
            src="https://cdn-icons-png.flaticon.com/128/2566/2566158.png"
            alt="No se puede mostrar la imagen."
          />
          <h4>{{ m5.tutor }}</h4>
        </div>
        <router-link id="horario" to="/horario"
          >Ver el horario disponible.</router-link
        >
      </div>
    </router-link>

    <router-link id="cursoRedir" to="/cursoMatematica">
      <div class="containerCurso">
        <img
          id="materiaImg"
          :src=m6.imagen
          alt="No se puede mostrar la imagen."
        />
        <h3>{{ m6.nombre }}</h3>
        <h5 id="descripcion">
          {{ m6.descripcion }}
        </h5>
        <div class="containerTutor">
          <img
            id="tutorImg"
            src="https://cdn-icons-png.flaticon.com/128/2566/2566158.png"
            alt="No se puede mostrar la imagen."
          />
          <h4>{{ m6.tutor }}</h4>
        </div>
        <router-link id="horario" to="/horario"
          >Ver el horario disponible.
        </router-link>
      </div>
    </router-link>
  </div>
</template>

<script>
import { getDatabase, ref, child, get } from "firebase/database";
export default {
  props: {
    nombre: {
      type: String,
      required: true,
    },
    imagen: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    tutor: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      nombre: null,
      materias: {},
      m1: {},
      m2: {},
      m3: {},
      m4: {},
      m5: {},
      m6: {},
    };
  },
  methods: {
    obtenerMaterias(numero) {
      return materias;
    },
  },

  mounted() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "materias/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("resultado: ", snapshot);

          const materias = snapshot.val();
          console.log(materias);

          this.m1 = materias.m1;
          this.m2 = materias.m2;
          this.m3 = materias.m3;
          this.m4 = materias.m4;
          this.m5 = materias.m5;
          this.m6 = materias.m6;
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>



<style scoped>
.casilleroCursos {
  justify-content: center;

  display: grid;
  /*grid de 4 columnas y con un ancho de 75px*/
  grid-template-columns: repeat(3, 300px);
  /*para un numero especifico de filas*/
  grid-template-rows: repeat(2, 500px);
  margin-right: 500px;
}

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