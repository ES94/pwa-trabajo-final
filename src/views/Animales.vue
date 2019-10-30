<template>
  <div>
    <b-container>
      <div>
        <h1>Animales</h1>
        <!-- Realizar bindeo de datos para tener lista de animales -->
        <!-- Cambiar porpiedad 'text' por ':text' para usar variables -->
        <b-dropdown id="dropdown-animales" text="[animal]" right>
          <!-- hacer for en la lista de animales de un archivo -->
          <!-- <b-dropdown-item-button
                v-for="(animal, index) of animales"
                :key="animal.id"
                @click="elegirAnimal(index)"
              >
                {{animal.nombre}}
          </b-dropdown-item-button>-->
          <b-dropdown-item-button>Animal n.° 1</b-dropdown-item-button>
          <b-dropdown-item-button>Animal n.° 2</b-dropdown-item-button>
        </b-dropdown>
        <!-- Realizar bindeo de datos con la cardInfo y la cardEstado para mostrar datos -->
        <cardInfo />
        <cardEstado />
      </div>
    </b-container>
  </div>
</template>

<script>
import cardInfo from "@/components/CardInfo.vue";
import cardEstado from "@/components/CardEstado.vue";

export default {
  name: "Animales",
  components: {
    cardInfo,
    cardEstado
  }
};
</script>