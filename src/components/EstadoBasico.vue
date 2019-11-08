<template>
  <div>
    <textoValor texto="Fecha de último peso" valor="[valor]" />
    <textoValor texto="Último peso" valor="[valor]" />
    <textoValor texto="Puntaje" valor="[valor]" />
    <textoValor texto="Caravana Senasa" valor="[valor]" />
  </div>
</template>

<script>
import textoValor from "@/components/TextoValor.vue";

export default {
    name: "estadoBasico",
    components: {
        textoValor
    }
}
</script>