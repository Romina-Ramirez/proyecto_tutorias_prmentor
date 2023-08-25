import { createStore } from 'vuex';

export default createStore({
  state: {
    objetoCompartido: null,
  },
  mutations: {
    setObjetoCompartido(state, objeto) {
      state.objetoCompartido = objeto;
    },
  },
});