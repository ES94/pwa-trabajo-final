<template>
  <div>
    <b-container>
      <!-- Título de la página -->
      <b-row>
        <b-col>
          <h1>Inconsistencias</h1>
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
                v-b-modal.modal-inconsistencia
              >
                <p>{{ index }}. {{ rp.rp }}</p>
              </b-list-group-item>

              <!-- Carga tacto -->
              <b-modal id="modal-inconsistencia" size="md" title="Inconsistencias" ok-only>
                Ninguna inconsistencia encontrada.
              </b-modal>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "tacto",
  computed: {
    ...mapState(["listaRp", "rpElegido"])
  },
  methods: {
    ...mapMutations(["elegirRp"])
  }
};
</script>