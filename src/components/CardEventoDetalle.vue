<template>
  <div>
    <b-card border-variant="dark" header="Detalles de evento" class="mt-3 mb-3">
        <textoValor texto="Participante" valor="[valor]" />
        <textoValor texto="Tratamiento" valor="[valor]" />
        <textoValor texto="Descripción" valor="[valor]" />
    </b-card>
  </div>
</template>

<script>
import textoValor from "@/components/TextoValor.vue";

export default {
  name: "cardEvDet",
  components: {
      textoValor
  }
};
</script>