<template>
  <h1>Planes y Precios</h1>
  <div class="container">
    <div class="containerPaquete">
      <div>
        <font-awesome-icon
          id="icon"
          icon="fa-solid fa-unlock"
          style="color: #a88400"
          size="2xl"
        />
      </div>
      <h1>Plan gratuito</h1>
      <p>
        Para cualquier persona que quiera acceder a una materia por 10 horas
        mensuales.
      </p>
      <h1>0,00 USD</h1>
      <h4>al mes para una persona</h4>
      <router-link to="/"><button id="button">Empieza ahora</button></router-link>
      <ul>
        ¿Qué incluye?
        <li>
          <font-awesome-icon icon="fa-solid fa-check" style="color: #27dbd5" />
          Una materia que tú elijas de la variedad que tenemos.
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-check" style="color: #27dbd5" />
          10 horas en la materia que decidas.
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-check" style="color: #27dbd5" />
          Acceso a los recursos que te proporcione la materia.
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-check" style="color: #27dbd5" />
          Acceso a clases virtuales con el tutor que decidas.
        </li>
      </ul>
    </div>
    <div class="containerPaquete">
      <div>
        <font-awesome-icon
          icon="fa-solid fa-gem"
          style="color: #2bc8fd"
          size="2xl"
        />
      </div>
      <h1>Paquete de horas extra</h1>
      <p>
        Agregará 10 horas al plan gratuito. Tendrás acceso a 10 horas extra en
        la materia que decidas, además de las 10 horas que te ofrece el plan
        gratuito.
      </p>
      <h1>9,99 USD</h1>
      <h4>por horas extra</h4>
      <router-link to="/pago"><button id="button">Activar</button></router-link>
      <ul>
        ¿Qué incluye?
        <li>
          <font-awesome-icon
            icon="fa-solid fa-check"
            style="color: #27dbd5"
          />10 horas extra en la materia que hayas escogido dentro del plan
          gratuito.
        </li>
        <li>
          <font-awesome-icon
            icon="fa-solid fa-check"
            style="color: #27dbd5"
          />Acceso a los recursos que te proporcione la materia.
        </li>
        <li>
          <font-awesome-icon
            icon="fa-solid fa-check"
            style="color: #27dbd5"
          />Acceso a clases virtuales con el tutor que decidas.
        </li>
      </ul>
    </div>
    <div class="containerPaquete">
      <div>
        <font-awesome-icon
          icon="fa-solid fa-gem"
          style="color: #2bc8fd"
          size="2xl"
        />
      </div>
      <h1>Paquete de materia extra</h1>
      <p>
        Agregará 10 horas al plan gratuito. Tendrás acceso a 10 horas extra en
        la materia que decidas, además de las 10 horas que te ofrece el plan
        gratuito.
      </p>
      <h1>14,99 USD</h1>
      <h4>por horas extra</h4>
      <router-link to="/pago"><button id="button">Activar</button></router-link>
      <ul>
        ¿Qué incluye?
        <li>
          <font-awesome-icon
            icon="fa-solid fa-check"
            style="color: #27dbd5"
          />10 horas extra en la materia que hayas escogido dentro del plan
          gratuito.
        </li>
        <li>
          <font-awesome-icon
            icon="fa-solid fa-check"
            style="color: #27dbd5"
          />Acceso a los recursos que te proporcione la materia.
        </li>
        <li>
          <font-awesome-icon
            icon="fa-solid fa-check"
            style="color: #27dbd5"
          />Acceso a clases virtuales con el tutor que decidas.
        </li>
      </ul>
    </div>
    <div class="containerPaquete">
      <div>
        <font-awesome-icon
          icon="fa-solid fa-gem"
          style="color: #2bc8fd"
          size="2xl"
        />
      </div>
      <h1>Paquete de materia avanzada por 36 horas</h1>
      <p>
        Agregará 10 horas al plan gratuito. Tendrás acceso a 10 horas extra en
        la materia que decidas, además de las 10 horas que te ofrece el plan
        gratuito.
      </p>
      <h1>19,99 USD</h1>
      <h4>por horas extra</h4>
      <router-link to="/pago"><button id="button">Activar</button></router-link>
      <ul>
        ¿Qué incluye?
        <li>
          <font-awesome-icon
            icon="fa-solid fa-check"
            style="color: #27dbd5"
          />10 horas extra en la materia que hayas escogido dentro del plan
          gratuito.
        </li>
        <li>
          <font-awesome-icon
            icon="fa-solid fa-check"
            style="color: #27dbd5"
          />Acceso a los recursos que te proporcione la materia.
        </li>
        <li>
          <font-awesome-icon
            icon="fa-solid fa-check"
            style="color: #27dbd5"
          />Acceso a clases virtuales con el tutor que decidas.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
}

.containerPaquete {
  display: grid;
  grid-template-rows: 2% 25% 16% 7% 10% 10% ;
  align-items: top;
  justify-content: center;
  padding: 30px;
  background: #fff0de;
  border-radius: 20px;
  width: 25%;
  margin-top: 30px;
  margin-inline: 10px;
  box-shadow: 10px 10px 30px -15px #685b4c;
}

ul {
  list-style-type: none;
  padding: 0px;
}

li {
  text-align: justify;
}

p {
  text-align: justify;
}
</style>