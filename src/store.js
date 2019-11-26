import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tambos: [{ nombre: "Tambo n°1" }, { nombre: "Tambo n°2" }],
    tamboElegido: "Seleccionar tambo",
    eventos: [
      {
        fechaEvento: "01/01/2000",
        rp: "10",
        tipoEvento: "Servicio",
        participante: "Juan Román",
        tratamiento: "Tratamiento 2",
        descripcion: "Se hizo un tratamiento 2"
      },
      {
        fechaEvento: "01/01/2001",
        rp: "14",
        tipoEvento: "Vendida",
        participante: "Aquiles Vaesa",
        tratamiento: "Tratamiento 1",
        descripcion: "Se hizo un tratamiento 1"
      },
      {
        fechaEvento: "01/01/2002",
        rp: "13",
        tipoEvento: "Celo",
        participante: "Juan Román",
        tratamiento: "Tratamiento 3",
        descripcion: "Se hizo un tratamiento 3"
      },
      {
        fechaEvento: "01/01/2003",
        rp: "17",
        tipoEvento: "Control lechero",
        participante: "Cosme Fulanito",
        tratamiento: "Tratamiento 3",
        descripcion: "Se hizo un tratamiento 3"
      },
      {
        fechaEvento: "01/01/2004",
        rp: "15",
        tipoEvento: "Volver a revisar",
        participante: "Aquiles Vaesa",
        tratamiento: "Tratamiento 1",
        descripcion: "Se hizo un tratamiento 1"
      }
    ],
    eventoElegido: "Seleccionar evento",
    tiposEventos: [
      { descripcion: "Control lechero" },
      { descripcion: "Volver a revisar" },
      { descripcion: "Celo" },
      { descripcion: "Servicio" },
      { descripcion: "Vendida" }
    ],
    tipoEventoElegido: "Seleccionar evento",
    listaRp: [
      { rp: "10" },
      { rp: "20" },
      { rp: "30" },
      { rp: "40" },
      { rp: "50" },
      { rp: "60" },
      { rp: "70" },
      { rp: "80" },
      { rp: "90" },
      { rp: "A 00" },
      { rp: "A 10" },
      { rp: "A 20" },
      { rp: "A 30" },
      { rp: "A 40" },
      { rp: "A 50" },
      { rp: "A 60" },
      { rp: "A 70" },
      { rp: "A 80" },
      { rp: "A 90" },
      { rp: "B 00" },
      { rp: "B 10" },
      { rp: "B 20" },
      { rp: "B 30" },
      { rp: "B 40" },
      { rp: "B 50" },
      { rp: "B 60" },
      { rp: "B 70" },
      { rp: "B 80" },
      { rp: "B 90" },
      { rp: "C 00" },
      { rp: "C 10" },
      { rp: "C 20" },
      { rp: "C 30" },
      { rp: "C 40" },
      { rp: "C 50" },
      { rp: "C 60" },
      { rp: "C 70" },
      { rp: "C 80" }
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
    tratamElegido: "Seleccionar tratamiento",
    tipoEdicionElegido: ""
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
    elegirTipoEvento(state, index) {
      var tipoEvento = state.tiposEventos[index].descripcion;
      state.tipoEventoElegido = tipoEvento;
    },
    elegirRp(state, index) {
      var rp = state.listaRp[index].rp;
      state.rpElegido = rp;
    },
    elegirParticipante(state, index) {
      var part = state.participantes[index].nombre;
      state.particElegido = part;
    },
    elegirTratamiento(state, index) {
      var tratam = state.tratamientos[index].nombre;
      state.tratamElegido = tratam;
    },
    nuevoTambo(state) {
      state.tipoEdicionElegido = "Creación"
    },
    editarTambo(state) {
      state.tipoEdicionElegido = "Edición"
    }
  },
  actions: {}
});
