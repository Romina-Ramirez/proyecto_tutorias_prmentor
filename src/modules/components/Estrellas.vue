<template>
  <div class="rating">
    <span
      v-for="(star, index) in maxStars"
      :key="index"
      @click="rate(index + 1)"
    >
      <font-awesome-icon :icon="getStarIcon(index)" size="2xl" />
    </span>
  </div>
</template>

<script>
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { mapState, mapMutations } from "vuex";

export default {
  props: {
    maxStars: {
      type: Number,
      default: 5,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    currentRating() {
      return Math.min(this.value, this.maxStars);
    },
    ...mapState(["rating"]),
  },
  methods: {
    rate(rating) {
      this.$emit("update:value", rating);
      console.log(rating);
      this.cambiarRating(rating);
    },
    getStarIcon(index) {
      return index < this.rating ? fasStar : farStar;
    },
     ...mapMutations(["setRating"]),
    cambiarRating(objeto) {
      const nuevoObjeto = objeto;
      this.setRating(nuevoObjeto);
    },
  },
};
</script>

<style>
.rating {
  cursor: pointer;
}

.selected {
  color: gold;
}
</style>