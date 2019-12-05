<template>
  <div>
    <b-modal
      id="modal-selecTambo"
      size="md"
      title="Seleccionar tambo"
      hide-footer
    >
      <b-container>
        <b-row>
          <b-col>
            <b-list-group>
              <b-list-group-item
                button
                v-for="(tambo, index) of tambos"
                :key="tambo.id"
                @click="elegirTambo(index)"
              >
                <p>{{ index }}. {{ tambo.nombre }}</p>
              </b-list-group-item>
            </b-list-group>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "selecTambo",
  computed: {
    ...mapState(["tambos", "tamboElegido"])
  },
  methods: {
    ...mapMutations(["elegirTambo"])
  }
};
</script>
