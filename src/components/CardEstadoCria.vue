<template>
  <div>
    <b-card border-variant="dark" header="Estado actual" class="mt-3 mb-3">
      <textoValor texto="Categoría de cría" valor="[valor]" />
      <estadoBasico />
    </b-card>
  </div>
</template>

<script>
import textoValor from "@/components/TextoValor.vue";
import estadoBasico from "@/components/EstadoBasico.vue";

export default {
  name: "cardEstadoCria",
  components: {
    textoValor,
    estadoBasico
  }
};
</script>