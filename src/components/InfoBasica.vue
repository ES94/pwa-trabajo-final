<template>
  <div>
    <textoValor texto="RP" valor="[valor]" />
    <b-img src="../assets/no-photo.png" fluid rounded />
    <textoValor texto="Nombre" valor="[valor]" />
    <textoValor texto="Fecha de nacimiento" valor="[valor]" />
    <textoValor texto="Edad" valor="[valor]" />
    <textoValor texto="Raza" valor="[valor]" />
    <textoValor texto="Registro" valor="[valor]" />
    <textoValor texto="RP madre" valor="[valor]" />
    <textoValor texto="Padre" valor="[valor]" />
    <textoValor texto="RP abuela" valor="[valor]" />
  </div>
</template>

<script>
import textoValor from "@/components/TextoValor.vue";

export default {
  name: "infoBasica",
  components: {
    textoValor
  }
};
</script>