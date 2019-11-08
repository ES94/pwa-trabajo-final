<template>
  <div>
    <b-card border-variant="dark" header="Estado actual" class="mt-3 mb-3">
      <textoValor texto="Número de lactancia" valor="[valor]" />
      <textoValor texto="Fecha inicio lactancia" valor="[valor]" />
      <textoValor texto="Días al parto" valor="[valor]" />
      <textoValor texto="Días preñez" valor="[valor]" />
      <textoValor texto="Próximo parto" valor="[valor]" />
      <textoValor texto="Cantidad de servicios" valor="[valor]" />
      <textoValor texto="No retorno" valor="[valor]" />
      <textoValor texto="Fecha de secado" valor="[valor]" />
      <textoValor texto="Días de seca" valor="[valor]" />
      <textoValor texto="IPC" valor="[valor]" />
      <textoValor texto="IPP" valor="[valor]" />
      <textoValor texto="Lote actual" valor="[valor]" />
      <textoValor texto="Lote anterior" valor="[valor]" />
      <textoValor texto="Mejor producción 305" valor="[valor]" />
      <textoValor texto="Mejor lact. prod. 305" valor="[valor]" />
      <textoValor texto="Fecha de calificación" valor="[valor]" />
      <estadoBasico />
    </b-card>
  </div>
</template>

<script>
import textoValor from "@/components/TextoValor.vue";
import estadoBasico from "@/components/EstadoBasico.vue";

export default {
  name: "cardEstado",
  components: {
    textoValor,
    estadoBasico
  }
};
</script>