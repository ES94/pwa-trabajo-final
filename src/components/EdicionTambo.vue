<template>
  <div>
    <b-modal id="modal-editarTambo" size="md" :title="tipoEdicion" hide-footer>
      <b-container>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-row>
            <!-- Nombre de tambo -->
            <b-col>
              <b-form-group
                id="input-group-nombreTambo"
                label="Nombre de tambo:"
                label-for="input-tambo"
                description="Ingrese un nombre para el tambo."
              >
                <b-form-input
                  id="input-tambo"
                  v-model="tambo.nombre"
                  type="text"
                  required
                  placeholder="Ingrese un nombre"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <!-- Botones -->
          <b-row align-h="end">
            <b-col col align-self="end" lg="5" md="4" sm="4">
              <b-button pill type="reset" variant="outline-secondary">
                Borrar cambios
              </b-button>
            </b-col>
            <b-col col align-self="end" lg="5" md="4" sm="4">
              <b-button pill type="submit" variant="outline-primary">
                Guardar cambios
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "edicionTambo",
  props: {
    tipoEdicion: String
  },
  data() {
    return {
      tambo: {
        nombre: ""
      }
    };
  },
  methods: {
    /* Guarda la información del formulario */
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.tambo));
    },
    /* Borra los campos del formulario */
    onReset(evt) {
      evt.preventDefault();
      this.tambo.nombre = "";
    }
  }
};
</script>
