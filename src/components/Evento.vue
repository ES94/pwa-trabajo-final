<template>
  <div>
    <textoValor texto="Fecha" :valor="fechaEvento" />
    <textoValor texto="RP" :valor="rp" />
    <textoValor texto="Tipo" :valor="tipoEvento" />
  </div>
</template>

<script>
import textoValor from "@/components/TextoValor.vue";

export default {
  name: "evento",
  props: {
    fechaEvento: Date,
    rp: Number,
    tipoEvento: String
  },
  components: {
      textoValor
  }
};
</script>