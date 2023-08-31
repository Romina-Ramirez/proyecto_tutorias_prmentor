<template>
  <div class="container">
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
    <div class="contenido">
      <div class="datos">
        <h3>Nombre del usuario</h3>
        <h3 id="fecha">Fecha de publicación</h3>
      </div>
      <hr>
      <h4>Comentario</h4>
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

.contenido {
  background: white;
  border-radius: 15px;
  width: 100%;
  margin: 30px;
}

.datos {
    display: flex;
}

h4 {
    text-align: justify;
    margin: 30px;
}

h3 {
    margin-inline: 30px;
}

img {
    height: 50px;
    margin: 30px;
}

#fecha {
    color: gray;
}
</style>