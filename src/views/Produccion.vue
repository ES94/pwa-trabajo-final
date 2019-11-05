<template>
  <div>
    <b-container>
      <!-- Título de la página -->
      <b-row>
        <b-col>
          <h1>Producción</h1>
        </b-col>
      </b-row>

      <!-- Contenido de la página -->
      <b-row align-h="center" align-v="center">
        <b-col lg="6" md="6" sm="8">
          <b-card border-variant="dark" header="Cargar nueva producción">
            <b-container>
              <b-row align-h="center">
                <b-col>
                  <datePicker v-model="pickedDate" />
                </b-col>
                <b-col>
                  <b-form-checkbox
                    v-model="statusMuestra"
                    name="checkbox"
                    value="checked"
                    unchecked-value="not_checked"
                  >Muestra</b-form-checkbox>
                </b-col>
                <b-col>
                  <b-form-checkbox
                    v-model="statusValorFijo"
                    name="checkbox"
                    value="checked"
                    unchecked-value="not_checked"
                  >Valor de lote fijo</b-form-checkbox>
                </b-col>
              </b-row>
              <b-row align-h="center">
                <b-col>
                  <b-form-group label="Seleccionar ordeñe">
                    <b-form-radio-group
                      v-model="selected"
                      :options="optionsOrdeñe"
                      name="radio-group-ordeñe"
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row align-h="end">
                <b-col col lg="3" md="3" sm="3">
                  <b-button pill variant="outline-primary">Cargar</b-button>
                </b-col>
              </b-row>
            </b-container>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import datePicker from "@/components/DatePicker.vue";

export default {
  name: "produccion",
  components: {
    datePicker
  },
  data() {
    return {
      selected: "first",
      optionsOrdeñe: [
        { text: "Ordeñe 1", value: "first" },
        { text: "Ordeñe 2", value: "second" },
        { text: "Ordeñe 3", value: "third" },
        { text: "Ordeñe 4", value: "fourth" }
      ],
      statusMuestra: "not_checked",
      statusValorFijo: "not_checked",
      pickedDate: new Date()
    };
  }
};
</script>