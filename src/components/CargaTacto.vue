<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <textoValor texto="Motivo" valor="[valor]" />
        </b-col>
      </b-row>

      <!-- Evento -->
      <b-row align-h="center" class="mt-3">
        <b-col>
          <b-dropdown id="dropdown-evento" :text="tipoEventoElegido" variant="primary" right>
            <b-dropdown-item-button
              v-for="(evento, index) of tiposEventos"
              :key="evento.id"
              @click="elegirTipoEvento(index)"
            >{{ evento.descripcion }}</b-dropdown-item-button>
          </b-dropdown>
        </b-col>
      </b-row>

      <!-- Participante -->
      <b-row align-h="center" class="mt-3">
        <b-col>
          <b-dropdown id="dropdown-participante" :text="particElegido" variant="primary" right>
            <b-dropdown-item-button
              v-for="(part, index) of participantes"
              :key="part.id"
              @click="elegirParticipante(index)"
            >
              <!-- hacer for en la lista de participantes de un archivo -->
              {{part.nombre}}
            </b-dropdown-item-button>
          </b-dropdown>
        </b-col>
      </b-row>

      <!-- Tratamiento -->
      <b-row align-h="center" class="mt-3">
        <b-col>
          <b-dropdown id="dropdown-tratamientos" :text="tratamElegido" variant="primary" right>
            <b-dropdown-item-button
              v-for="(tratam, index) of tratamientos"
              :key="tratam.id"
              @click="elegirTratamiento(index)"
            >
              <!-- hacer for en la lista de tratamientos de un archivo -->
              {{tratam.nombre}}
            </b-dropdown-item-button>
          </b-dropdown>
        </b-col>
      </b-row>

      <!-- Cargar -->
      <b-row align-h="end" class="mt-3">
        <b-col col lg="3" md="3" sm="3">
          <b-button pill variant="outline-primary" v-b-modal.modal-infoTactoCargado>Cargar</b-button>
          <b-modal id="modal-infoTactoCargado" size="sm" title="Información" ok-only>
            <p>Tacto cargado.</p>
          </b-modal>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import textoValor from "@/components/TextoValor.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "cargaTacto",
  components: {
    textoValor
  },
  computed: {
    ...mapState([
      "participantes",
      "particElegido",
      "tratamientos",
      "tratamElegido",
      "tiposEventos",
      "tipoEventoElegido"
    ])
  },
  methods: {
    ...mapMutations([
      "elegirParticipante",
      "elegirTratamiento",
      "elegirTipoEvento"
    ])
  }
};
</script>