<template>
  <div>
    <b-container>
      <!-- Título de la página -->
      <b-row>
        <b-col>
          <h1>Reproducción</h1>
        </b-col>
      </b-row>

      <!-- Contenido de la página -->
      <b-row align-h="center" align-v="center">
        <b-col lg="6" md="6" sm="8">
          <b-card border-variant="dark" header="Cargar nueva reproducción">
            <b-container>
              <b-row align-h="center">
                <b-col>
                  <datePicker v-model="pickedDate" aria-placeholder="Elegir fecha" />
                </b-col>
                <b-col>
                  <b-dropdown right text="Elegir evento" variant="primary" class="m-2">
                    <b-dropdown-item>Evento 1</b-dropdown-item>
                    <b-dropdown-item>Evento 2</b-dropdown-item>
                    <b-dropdown-item>Evento 3</b-dropdown-item>
                  </b-dropdown>
                </b-col>
              </b-row>
              <b-row align-h="center">
                <b-col>
                  <b-button pill variant="outline-primary" v-b-modal.modal-agregarRp>Agregar RP</b-button>
                  
                  <!-- Cuadro modal de lista de RPs -->
                  <!-- Descubrir como capturar y devolver info dentro del modal
                  o sino hacer una lista de botones -->
                  <b-modal id="modal-agregarRp" title="Agregar RP" ok-only>
                    <b-form-group label="Lista de RP">
                      <b-form-radio-group name="radio-group-rp">
                        <b-form-radio
                          v-for="(rp, index) of listaRp"
                          :key="rp.id"
                          :value="index"
                        >{{ rp.rp }}</b-form-radio>
                      </b-form-radio-group>
                    </b-form-group>
                  </b-modal>
                </b-col>
                <b-col>
                  <textoValor texto="RP" :valor="rpElegido" />
                </b-col>
              </b-row>
              <b-row align-h="center">
                <b-col col lg="6" md="6" sm="10">
                  <b-dropdown
                    id="dropdown-participantes"
                    :text="particElegido"
                    variant="primary"
                    right
                  >
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
                <b-col col lg="6" md="6" sm="10">
                  <b-dropdown
                    id="dropdown-tratamientos"
                    :text="tratamElegido"
                    variant="primary"
                    right
                  >
                    <b-dropdown-item-button
                      v-for="(tratam, index) of tratamientos"
                      :key="tratam.id"
                      @click="elegirTratamiento(index)"
                    >
                      <!-- hacer for en la lista de participantes de un archivo -->
                      {{tratam.nombre}}
                    </b-dropdown-item-button>
                  </b-dropdown>
                </b-col>
              </b-row>
              <b-row align-h="center">
                <b-col>
                  <b-form-textarea
                    v-model="dato"
                    placeholder="Escribir algo..."
                    rows="3"
                    max-rows="6"
                    class="mt-3"
                  />
                </b-col>
              </b-row>
              <b-row align-h="end">
                <b-col col lg="3" md="3" sm="3">
                  <b-button pill variant="outline-primary" class="mt-3">Guardar</b-button>
                </b-col>
              </b-row>
            </b-container>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import datePicker from "@/components/DatePicker.vue";
import textoValor from "@/components/TextoValor.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "reproduccion",
  components: {
    datePicker,
    textoValor
  },
  data() {
    return {
      pickedDate: new Date(),
      dato: ""
    };
  },
  computed: {
    ...mapState([
      "listaRp",
      "rpElegido",
      "participantes",
      "particElegido",
      "tratamientos",
      "tratamElegido"
    ])
  },
  methods: {
    ...mapMutations(["agregarRp", "elegirParticipante", "elegirTratamiento"])
  }
};
</script>