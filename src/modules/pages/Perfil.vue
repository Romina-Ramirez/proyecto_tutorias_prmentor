<template>
  <div v-if="objetoCompartido" class="container">
    <div class="containerIzq">
      <div class="containerDatos containers">
        <div>
          <img
            id="imgPerfil"
            :src="imagen_perfil"
            alt="No se pudo mostrar la imagen."
          />
        </div>
        <div>
          <h2>{{ objetoCompartido.usuario.nombre }}</h2>
          <h3>{{ objetoCompartido.usuario.rol }}</h3>
          <h3>
            <font-awesome-icon icon="fa-regular fa-envelope" />
            {{ objetoCompartido.usuario.correo }}
          </h3>
          <h3>
            <font-awesome-icon icon="fa-regular fa-phone" />
            {{ objetoCompartido.usuario.telefono }}
          </h3>
          <router-link to="/actualizar">
            <button class="edit">Editar Perfil</button></router-link
          >
        </div>
      </div>
      <div class="containerAcerca containers">
        <h2>Acerca de {{objetoCompartido.usuario.nombre}}</h2>
        <hr />
        <p>
          ¡Saludos! Soy {{objetoCompartido.usuario.nombre}}, un entusiasta del aprendizaje y la exploración
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
        <h3>Nivel educativo Actual: {{ objetoCompartido.usuario.nivelEd }}</h3>
        <h3>
          Institución educativa: {{ objetoCompartido.usuario.institucion }}
        </h3>
        <h3>Área de estudio: {{ objetoCompartido.usuario.carrera }}</h3>
      </div>
    </div>
    <div class="containerDer">
      <div class="containerPago containers">
        <h2>Información de Paquetes</h2>
        <hr />
        <h4>Paquetes activos</h4>
        <div v-if="pagos">
          <h4 v-for="item in pagos" :key="item.clave">
            <font-awesome-icon icon="fa-solid fa-box-archive" />
            {{ item.pago.paquete }}
            <font-awesome-icon icon="fa-solid fa-dollar-sign" />
            {{ item.pago.monto }}
          </h4>
        </div>
        <router-link to="/paquetes">
          <font-awesome-icon icon="fa-regular fa-square-plus" />
          Activar paquetes
        </router-link>
      </div>
      <div class="containerEquipos containers">
        <h2>Mis cursos</h2>
        <hr />
        <div class="cursos" v-if="materias">
          <h4 v-for="item in materias" :key="item.clave">
            <font-awesome-icon icon="fa-solid fa-user-group" />
            {{item.materia.nombre}} - Impartida por: {{item.materia.tutor}}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { getDatabase, ref, child, get } from "firebase/database";
export default {
  data() {
    return {
      imagen_perfil: null,
      pagos: null,
      materias: null,
    };
  },
  computed: {
    ...mapState(["objetoCompartido"]),
  },
  mounted() {
    if (this.objetoCompartido == null) {
      alert(
        "No estás logueado. Serás redirigido a la página de inicio de sesión."
      );
      this.$router.push("/login");
    } else {
      this.imagen_perfil = this.objetoCompartido.usuario.foto_perfil;
      this.actualizarDatos();
      this.cargarPagos();
      this.cargarMaterias();
    }
  },
  methods: {
    cargarMaterias() {
      //Aqui se busca el usuario para compartirle con los demas componentes
      const dbRef = ref(getDatabase());
      get(child(dbRef, `materias/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log("resultado: ", Object.entries(snapshot.val()));
            console.log(
              "resultado objeto materias: ",
              Object.values(this.objetoCompartido.usuario.materias)
            );
            const materiasFiltradas = Object.entries(snapshot.val())
              .filter(([clave, materia]) =>
                Object.values(this.objetoCompartido.usuario.materias).find(
                  (item) => item.valor === materia.nombre
                )
              )
              .map(([clave, materia]) => ({ clave, materia })); // Crear un nuevo objeto con clave y valor

            if (materiasFiltradas.length > 0) {
              this.materias = materiasFiltradas;
              console.log(materiasFiltradas);
            } else {
              console.log("No se encontraron pagos para este usuario");
            }
          } else {
            console.log("No hay datos disponibles");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    cargarPagos() {
      //Aqui se busca el usuario para compartirle con los demas componentes
      const dbRef = ref(getDatabase());
      get(child(dbRef, `pagos/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log("resultado: ", Object.entries(snapshot.val()));
            console.log(
              "resultado objeto: ",
              Object.values(this.objetoCompartido.usuario.pagos)
            );
            const pagosFiltrados = Object.entries(snapshot.val())
              .filter(([clave, pago]) =>
                Object.values(this.objetoCompartido.usuario.pagos).find(
                  (item) => item.valor === pago.index
                )
              )
              .map(([clave, pago]) => ({ clave, pago })); // Crear un nuevo objeto con clave y valor

            if (pagosFiltrados.length > 0) {
              this.pagos = pagosFiltrados;
              console.log(pagosFiltrados);
            } else {
              console.log("No se encontraron pagos para este usuario");
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
    ...mapMutations(["setObjetoCompartido"]),
    cambiarObjetoCompartido(objeto) {
      const nuevoObjeto = objeto;
      this.setObjetoCompartido(nuevoObjeto);
    },
  },
};
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
  align-items: center;
}

p {
  text-align: justify;
}

#imgPerfil {
  width: 150px;
  margin-right: 100px;
  border: 2px solid black;
  border-radius: 20px;
}

.edit {
  padding: 8px 16px;
  font-size: 14px;
  border: 1px solid #3498db;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.edit:hover {
  background-color: #2980b9;
  border-color: #2980b9;
}

.cursos{
  display: flex;
  align-content: left;
  justify-items: left;
  flex-direction: column;
}
</style>