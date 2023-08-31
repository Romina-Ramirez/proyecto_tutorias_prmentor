import { createStore } from 'vuex';

export default createStore({
  state: {
    objetoCompartido: null,
    materia: null,
    rating:null,
  },
  mutations: {
    setObjetoCompartido(state, objeto) {
      state.objetoCompartido = objeto;
    },
    setMateria(state, objeto) {
      state.materia = objeto;
    },
    setRating(state, objeto) {
      state.rating = objeto;
    },
  },
});