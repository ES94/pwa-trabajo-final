<template>
  <div>
    <b-card border-variant="dark" header="Detalles de evento" class="mt-3 mb-3">
      <textoValor texto="Participante" :valor="eventoElegido.participante" />
      <textoValor texto="Tratamiento" :valor="eventoElegido.tratamiento" />
      <textoValor texto="Descripción" :valor="eventoElegido.descripcion" />
    </b-card>
  </div>
</template>

<script>
import textoValor from "@/components/TextoValor.vue";
import { mapState } from "vuex";

export default {
  name: "cardEvDet",
  components: {
    textoValor
  },
  computed: {
    ...mapState(["eventoElegido"])
  }
};
</script>