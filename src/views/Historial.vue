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
        <b-col >
          <cardEvLista />
        </b-col>
        <b-col>
          <cardEvDet />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import cardEvLista from "@/components/CardEventoLista.vue"
import cardEvDet from "@/components/CardEventoDetalle.vue"

export default {
  name: "historial",
  components: {
    cardEvLista,
    cardEvDet
  }
}
</script>