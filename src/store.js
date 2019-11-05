import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tambos: [{ nombre: "Tambo n°1" }, { nombre: "Tambo n°2" }],
    tamboElegido: "Seleccionar tambo",
    eventos: [
      { fechaEvento: "01/01/2000", rp: 10, tipoEvento: "Servicio" },
      { fechaEvento: "01/01/2001", rp: 14, tipoEvento: "Vendida" },
      { fechaEvento: "01/01/2002", rp: 13, tipoEvento: "Celo" },
      { fechaEvento: "01/01/2003", rp: 17, tipoEvento: "Control lechero" },
      { fechaEvento: "01/01/2004", rp: 15, tipoEvento: "Volver a revisar" }
    ],
    eventoElegido: "Seleccionar evento",
    listaRp: [
      { rp: 10 },
      { rp: 20 },
      { rp: 30 },
      { rp: 40 },
      { rp: 50 }
    ],
    rpElegido: "Elegir RP",
    participantes: [
      { nombre: "Juan Román" },
      { nombre: "Aquiles Vaesa" },
      { nombre: "Cosme Fulanito" }
    ],
    particElegido: "Seleccionar participante",
    tratamientos: [
      { nombre: "Tratamiento 1" },
      { nombre: "Tratamiento 2" },
      { nombre: "Tratamiento 3" }
    ],
    tratamElegido: "Seleccionar tratamiento"
  },
  mutations: {
    elegirTambo(state, index) {
      /* buscar tambo con dicho nombre en el archivo (o donde sea que este guardado) */
      var tambo = state.tambos[index].nombre;
      state.tamboElegido = tambo;
    },
    elegirEvento(state, index) {
      var evento = state.eventos[index];
      state.eventoElegido = evento;
    },
    agregarRp(state, index) {
      var rp = state.listaRp[index];
      state.rpElegido = rp;
    },
    elegirParticipante(state, index) {
      var part = state.participantes[index].nombre;
      state.particElegido = part;
    },
    elegirTratamiento(state, index) {
      var tratam = state.tratamientos[index].nombre;
      state.tratamElegido = tratam;
    }
  },
  actions: {}
});
