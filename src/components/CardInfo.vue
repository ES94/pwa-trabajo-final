<template>
  <div>
    <b-card border-variant="dark" header="Información del animal" class="mt-3">
      <textoValor texto="RP" valor="[valor]" />
      <b-img src="https://picsum.photos/1024/400/?image=41" fluid rounded />
      <textoValor texto="Nombre" valor="[valor]" />
      <textoValor texto="Fecha de nacimiento" valor="[valor]" />
      <textoValor texto="Edad" valor="[valor]" />
      <textoValor texto="Raza" valor="[valor]" />
      <textoValor texto="Registro" valor="[valor]" />
      <textoValor texto="RP madre" valor="[valor]" />
      <textoValor texto="Padre" valor="[valor]" />
      <textoValor texto="RP abuela" valor="[valor]" />
      <textoValor texto="Fecha de ingreso" valor="[valor]" />
    </b-card>
  </div>
</template>

<script>
import textoValor from "@/components/TextoValor.vue";

export default {
  name: "cardInfo",
  components: {
    textoValor
  }
};
</script>