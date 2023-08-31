<template>
  <div class="container">
    <input type="text" placeholder="Añade un nuevo comentario">
    <font-awesome-icon icon="fa-regular fa-paper-plane" size="xl"/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

svg {
    margin-block: 30px;
    margin-right: 30px;
    cursor: pointer;
}

input {
    margin: 30px;
    width: 94%;
    height: 30px;
    font-size: 20px;
    padding-inline: 20px;
}
</style>