<template>
  <div>
    <b-container>
      <!-- Título de la página -->
      <b-row>
        <b-col>
          <h1>Tacto</h1>
        </b-col>
      </b-row>

      <!-- Contenido de la página -->
      <b-row>
        <b-col>
          <b-card border-variant="dark" header="Lista de RP" class="mt-3 mb-3">
            <b-list-group flush>
              <!-- Lista de RP -->
              <b-list-group-item
                button
                v-for="(rp, index) of listaRp"
                :key="rp.id"
                v-b-modal.modal-cargaTacto
              >
                <p>{{ index }}. {{ rp.rp }}</p>
              </b-list-group-item>

              <!-- Carga tacto -->
              <b-modal id="modal-cargaTacto" size="md" title="Cargar tacto" ok-only>
                <cargaTacto />
              </b-modal>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import cargaTacto from "@/components/CargaTacto.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "tacto",
  components: {
    cargaTacto
  },
  computed: {
    ...mapState(["listaRp", "rpElegido"])
  },
  methods: {
    ...mapMutations(["elegirRp"])
  }
};
</script>