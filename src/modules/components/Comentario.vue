<template>
  <div class="container">
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
    <div class="contenido">
      <div class="datos">
        <h3>Nombre del usuario: {{ usuario }}</h3>
        <h3 id="fecha">Fecha de publicación: {{ fecha }}</h3>
        <h3>
          Valoracion: {{ value }}
          <font-awesome-icon :icon="getStarIcon(1)" size="1xl" />
        </h3>
      </div>
      <hr />
      <h4>{{ texto }}</h4>
    </div>
  </div>
</template>

<script>
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
export default {
  props: {
    maxStars: {
      type: Number,
      default: 5,
    },
    value: {
      type: Number,
      required: true,
    },
    texto: {
      type: String,
      required: true,
    },
    usuario: {
      type: String,
      required: true,
    },
    fecha: {
      type: String,
      required: true,
    },
  },
  computed: {
    currentRating() {
      return Math.min(this.value, this.maxStars);
    },
  },
  methods: {
    rate(rating) {
      this.$emit("update:value", rating);
      console.log(rating);
    },
    getStarIcon(index) {
      return index < this.rating ? fasStar : farStar;
    },
  },
};
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