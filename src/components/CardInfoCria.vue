<template>
  <div>
    <b-card border-variant="dark" header="Información del animal" class="mt-3 mb-3">
      <infoBasica />
    </b-card>
  </div>
</template>

<script>
import infoBasica from "@/components/InfoBasica.vue";

export default {
  name: "cardInfoCria",
  components: {
    infoBasica
  }
};
</script>