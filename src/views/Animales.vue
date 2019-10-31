<template>
  <div>
    <b-container>
      <!-- Título de la página -->
      <b-row>
        <b-col>
          <h1>Animales</h1>
        </b-col>
      </b-row>

      <!-- Cinta de herramientas y opciones -->
      <b-row>
        <b-col>
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
        </b-col>
      </b-row>

      <!-- Contenido de la página -->
      <b-row>
        <!-- Realizar bindeo de datos con la cardInfo y la cardEstado para mostrar datos -->
        <b-col>
          <cardInfo />
          <cardEstado />
        </b-col>
      </b-row>
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