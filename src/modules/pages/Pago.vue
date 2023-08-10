<template>
  <div class="container">
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
            <input type="text" placeholder="0000 0000 0000 0000" />
          </div>
          <div class="datosMas">
            <div class="datosValida">
              <label for="">Fecha de vencimiento</label>
              <input type="text" placeholder="MM/AA" />
            </div>
            <div class="datosValida">
              <label for="">Código de seguridad</label>
              <input type="text" />
            </div>
          </div>
          <div class="eleccion">
            <input type="checkbox" id="check" />
            <b>
              Guardar tarjeta para futuras compras. Esto no afectará la forma en
              la que pagas por los paquetes existentes y lo puedes administrar
              en cualquier momento desde la página de tu cuenta.
            </b>
          </div>
        </div>
        <button id="button">Pagar ahora</button>
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