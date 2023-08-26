import { createStore } from 'vuex';

export default createStore({
  state: {
    objetoCompartido: null,
    materia: null,
  },
  mutations: {
    setObjetoCompartido(state, objeto) {
      state.objetoCompartido = objeto;
    },
    setMateria(state, objeto) {
      state.materia = objeto;
    },
  },
});