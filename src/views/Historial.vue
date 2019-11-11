<template>
  <div>
    <b-container>
      <!-- Título de la página -->
      <b-row>
        <b-col>
          <h1>Historial</h1>
        </b-col>
      </b-row>

      <!-- Contenido de la página -->
      <b-row>
        <b-col col lg="4" md="4" sm="10">
          <cardEvLista />
        </b-col>
        <b-col col lg="8" md="8" sm="10">
          <cardEvDet />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import cardEvLista from "@/components/CardEventoLista.vue";
import cardEvDet from "@/components/CardEventoDetalle.vue";

export default {
  name: "historial",
  components: {
    cardEvLista,
    cardEvDet
  }
};
</script>