<template>
  <div>
    <b-card border-variant="dark" header="Lista de eventos" class="mt-3 mb-3">
      <evento
        v-for="(evento, index) of eventos"
        :key="evento.id" 
        @click="elegirEvento(index)"
        :fechaEvento="evento.fechaEvento"
        :rp="evento.rp"
        :tipoEvento="evento.tipoEvento"
      />
    </b-card>
  </div>
</template>

<script>
import evento from "@/components/Evento.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "cardEvLista",
  components: {
    evento
  },
  computed: {
    ...mapState(["eventos", "eventoElegido"])
  },
  methods: {
    ...mapMutations(["elegirEvento"])
  }
};
</script>