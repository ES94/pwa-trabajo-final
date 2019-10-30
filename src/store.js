import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tambos: [{ nombre: "Tambo n°1" }, { nombre: "Tambo n°2" }],
    tamboElegido: "Elegir tambo"
  },
  mutations: {
    elegirTambo(state, index) {
      /* buscar tambo con dicho nombre en el archivo (o donde sea que este guardado) */
      var tambo = state.tambos[index].nombre;
      state.tamboElegido = tambo;
    }
  },
  actions: {}
});
