<template>
  <div>
    <b-modal id="modal-editarTambo" size="md" title="Editar tambos">
      <!-- Header -->
      <template v-slot:modal-header>
        <h5>{{ tipoEdicion }} de tambo</h5>
      </template>

      <!-- Body -->
      <template v-slot:default>
        <b-container>
          <b-form @submit="submit" @reset="close">
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
          </b-form>
        </b-container>
      </template>

      <!-- Footer -->
      <template v-slot:modal-footer="{ submit, close }">
        <b-button variant="secondary" @click="close()">
          Cancelar
        </b-button>

        <b-button variant="primary" @click="submit()">
          OK
        </b-button>
      </template>
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
    submit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.tambo));
    },
    close(evt) {
      evt.preventDefault();
      this.tambo.nombre = "";
    }
  }
};
</script>
