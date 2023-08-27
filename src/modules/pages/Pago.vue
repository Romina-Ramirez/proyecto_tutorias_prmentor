<template>
  <div v-if="objetoCompartido" class="container">
    <div class="containerPaquete">
      <div class="plan">
        <h1 id="tuPlan">Tu plan</h1>
        <router-link id="cambiar" to="/paquetes">Cambiar plan</router-link>
      </div>
      <hr />
      <h2>Paquete de horas extra</h2>
      <h1>9.99 USD</h1>
      <p>Por 1 mes</p>
      <ul>
        <li>Cancela cuando quieras.</li>
        <li>Te enviaremos un recordatorio 7 días antes de cobrarte.</li>
      </ul>
      <div class="metodoPago">
        <div class="eleccion">
          <!-- <input type="radio" /> -->
          <h2>Tarjeta de crédito o débito</h2>
        </div>
        <div class="tarjetas">
          <font-awesome-icon id="icon" icon="fa-brands fa-cc-visa" size="2xl" />
          <font-awesome-icon
            id="icon"
            icon="fa-brands fa-cc-mastercard"
            size="2xl"
          />
          <font-awesome-icon id="icon" icon="fa-brands fa-cc-amex" size="2xl" />
          <font-awesome-icon
            id="icon"
            icon="fa-brands fa-cc-diners-club"
            size="2xl"
          />
        </div>
        <div class="datos">
          <h2>Datos de pago</h2>
          <font-awesome-icon icon="fa-solid fa-lock" />
        </div>
        <div class="datosTarjeta">
          <div class="datosValida">
            <label for="">Número de la tarjeta</label>
            <input
              type="text"
              placeholder="0000 0000 0000 0000"
              v-model="pago.nroTarjeta"
            />
          </div>
          <div class="datosMas">
            <div class="datosValida">
              <label for="">Fecha de vencimiento</label>
              <input type="text" placeholder="MM/AA" v-model="fecha_exp" />
            </div>
            <div class="datosValida">
              <label for="">Código de seguridad</label>
              <input type="text" />
            </div>
          </div>
          <div class="eleccion">
            <input type="checkbox" id="check" v-model="check" />
            <b>
              Guardar tarjeta para futuras compras. Esto no afectará la forma en
              la que pagas por los paquetes existentes y lo puedes administrar
              en cualquier momento desde la página de tu cuenta.
            </b>
          </div>
        </div>
        <button id="button" @click="agregarPago">Pagar ahora</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, child, push, update, set } from "firebase/database";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      horas: 10,
      check: null,
      fecha_exp: "",
      npagos: 0,
      pago: {
        paquete: "Paquete 1",
        nroTarjeta: "",
        monto: 9.99,
        fecha: null,
        nombre: "",
        index: "",
      },
    };
  },
  computed: {
    ...mapState(["objetoCompartido"]),
  },
  methods: {
    agregarPago() {
      this.npagos = !this.objetoCompartido.usuario.pagos
        ? 0
        : Object.entries(this.objetoCompartido.usuario.pagos).length;
      this.pago.index = `p${this.npagos + 1}`;
      const db = getDatabase();
      const pagosRef = ref(db, "pagos/");

      const nuevoPagoRef = push(pagosRef); // Generar un nuevo ID único para el usuario
      this.pago.nombre = this.objetoCompartido.usuario.nombre;
      var fechaHoraActual = new Date();

      var fechaHoraFormateada = fechaHoraActual.toISOString(); // Formato ISO 8601

      console.log(fechaHoraFormateada); // Imprimir la fecha y hora formateada

      this.pago.fecha = fechaHoraFormateada;

      set(nuevoPagoRef, this.pago)
        .then(() => {
          console.log("Pago agregado exitosamente a Firebase.");
          this.actualizar();
        })
        .catch((error) => {
          console.error("Error al agregar el pago a Firebase:", error);
        });
    },
    actualizar() {
      const clave = this.objetoCompartido.clave;

      const db = getDatabase();

      if (check) {
        this.objetoCompartido.usuario.nroTarjeta = this.pago.nroTarjeta;
        this.objetoCompartido.usuario.fecha_exp = this.fecha_exp;
        this.objetoCompartido.usuario.horas_disponibles += this.horas;
      } else {
        this.objetoCompartido.usuario.horas_disponibles += this.horas;
      }

      // A post entry.
      const postData = this.objetoCompartido.usuario;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      const updates = {};
      updates["/usuarios/" + this.objetoCompartido.clave] = postData;
      const retorno = update(ref(db), updates);
      console.log("Se ha actualizado: ", retorno);

      const pagosRef = ref(db, "usuarios/" + clave + "/pagos/");

      const nuevoPagoRef = push(pagosRef);

      set(nuevoPagoRef, { valor: this.pago.index })
        .then(() => {
          console.log("Pago al usuario agregado exitosamente a Firebase.");
        })
        .catch((error) => {
          console.error("Error al agregar pago al usuario a Firebase:", error);
        });

      this.$router.push("/perfil");
    },
  },
  mounted() {
    if (this.objetoCompartido == null) {
      alert(
        "No estás logueado. Serás redirigido a la página de inicio de sesión."
      );
      this.$router.push("/login");
    } else {
      this.pago.nroTarjeta = this.objetoCompartido.usuario.nroTarjeta;
      this.fecha_exp = this.objetoCompartido.usuario.fecha_exp;
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.containerPaquete {
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: #fff0de;
  border-radius: 20px;
  width: 75%;
  margin-top: 30px;
  box-shadow: 10px 10px 30px -15px #685b4c;
}

.plan,
.datos {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.metodoPago {
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  padding: 30px;
}

.datosValida {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.datosMas {
  display: flex;
  width: 100%;
  justify-content: center;
}

.eleccion {
  display: flex;
}

hr {
  border: 1px solid black;
  width: 100%;
}

input {
  width: 90%;
  padding-block: 10px;
}

li {
  text-align: justify;
}

#icon {
  margin-inline: 10px;
}

#tuPlan {
  text-align: left;
}

#cambiar {
  text-align: right;
}

#check {
  height: 15px;
  width: 15px;
}
</style>