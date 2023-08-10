<template>
  <div>
    <div>
      <h1>Tu plan</h1>
      <router-link to="/paquetes">Cambiar plan</router-link>
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
          <input type="radio" />
          <p>Tarjeta de crédito o débito</p>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.metodoPago {
  display: flex;
  flex-direction: column;
}

.eleccion {
  display: flex;
}

#icon {
  margin-inline: 10px;
}
</style>