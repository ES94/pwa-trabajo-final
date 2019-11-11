<template>
  <div>
    <b-container>
      <!-- Título de la página -->
      <b-row>
        <b-col>
          <h1>Crías</h1>
        </b-col>
      </b-row>

      <!-- Cinta de herramientas y opciones -->
      <b-row>
        <b-col>
          <!-- Realizar bindeo de datos para tener lista de animales -->
          <!-- Cambiar porpiedad 'text' por ':text' para usar variables -->
          <b-dropdown id="dropdown-animales" text="[cría]" right>
            <!-- hacer for en la lista de animales de un archivo -->
            <!-- <b-dropdown-item-button
                v-for="(animal, index) of animales"
                :key="animal.id"
                @click="elegirAnimal(index)"
              >
                {{animal.nombre}}
            </b-dropdown-item-button>-->
            <b-dropdown-item-button>Cría n.° 1</b-dropdown-item-button>
            <b-dropdown-item-button>Cría n.° 2</b-dropdown-item-button>
          </b-dropdown>
        </b-col>
      </b-row>

      <!-- Contenido de la página -->
      <b-row>
        <!-- Realizar bindeo de datos con la cardInfo y la cardEstado para mostrar datos -->
        <b-col col lg="6" md="6" sm="10">
          <cardInfoCria />
        </b-col>
        <b-col col lg="6" md="6" sm="10">
          <cardEstadoCria />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import cardInfoCria from "@/components/CardInfoCria.vue";
import cardEstadoCria from "@/components/CardEstadoCria.vue";

export default {
  name: "crias",
  components: {
    cardInfoCria,
    cardEstadoCria
  }
}
</script>