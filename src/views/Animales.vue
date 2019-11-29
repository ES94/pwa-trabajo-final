<template>
  <div>
    <b-container>
      <!-- Título de la página -->
      <b-row>
        <b-col>
          <h1>Animales</h1>
        </b-col>
      </b-row>

      <hr />

      <!-- Cinta de herramientas y opciones -->
      <b-row align-h="center">
        <b-col col sm="6" md="4" lg="3">
          <!-- Elegir animal -->
          <b-button
            pill
            variant="outline-primary"
            class="m-3"
            v-b-modal.modal-elegirRp
          >
            {{ rpElegido }}
          </b-button>

          <!-- Modal de RP -->
          <!-- Realizar bindeo de datos para tener lista de animales -->
          <b-modal
            id="modal-elegirRp"
            size="sm"
            scrollable
            title="Elegir RP"
            ok-only
          >
            <b-list-group flush>
              <!-- Lista de RP -->
              <b-list-group-item
                button
                v-for="(rp, index) of listaRp"
                :key="rp.id"
                @click="elegirRp(index)"
              >
                <p>{{ index }}. {{ rp.rp }}</p>
              </b-list-group-item>
            </b-list-group>
          </b-modal>

          <!-- Opciones -->
          <b-button
            id="popover-opcionesAnimal"
            pill
            variant="outline-primary"
            class="m-3"
          >
            ...
          </b-button>
          <b-popover
            target="popover-opcionesAnimal"
            triggers="click"
            title="Opciones"
            placement="bottom"
          >
            <b-list-group flush>
              <!-- Lista de opciones -->
              <b-list-group-item button>
                Agregar nota
              </b-list-group-item>
              <b-list-group-item button>
                Agregar evento
              </b-list-group-item>
              <b-list-group-item button>
                Actualizar
              </b-list-group-item>
            </b-list-group>
          </b-popover>
        </b-col>
      </b-row>

      <hr />
      
      <!-- Contenido de la página -->
      <b-row>
        <b-col>
          <b-tabs fill class="mt-3">
            <!-- Información de animal -->
            <b-tab title="Animal" active>
              <b-container>
                <b-row>
                  <!-- Realizar bindeo de datos con la cardInfo y la cardEstado para mostrar datos -->
                  <b-col col lg="6" md="6" sm="10">
                    <cardInfo />
                  </b-col>
                  <b-col col lg="6" md="6" sm="10">
                    <cardEstado />
                  </b-col>
                </b-row>
              </b-container>
            </b-tab>

            <!-- Historial de animal -->
            <!-- Los eventos están bindeados con los eventos cargados en el store. Cambiar luego
            por los eventos del animal elegido. -->
            <b-tab title="Historial">
              <b-container>
                <b-row>
                  <b-col col lg="4" md="4" sm="10">
                    <cardEvLista />
                  </b-col>
                  <b-col col lg="8" md="8" sm="10">
                    <cardEvDet />
                  </b-col>
                </b-row>
              </b-container>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import cardInfo from "@/components/CardInfo.vue";
import cardEstado from "@/components/CardEstado.vue";
import cardEvLista from "@/components/CardEventoLista.vue";
import cardEvDet from "@/components/CardEventoDetalle.vue";

export default {
  name: "Animales",
  components: {
    cardInfo,
    cardEstado,
    cardEvLista,
    cardEvDet
  },
  computed: {
    ...mapState(["rpElegido", "listaRp"])
  },
  methods: {
    ...mapMutations(["elegirRp"])
  }
};
</script>
