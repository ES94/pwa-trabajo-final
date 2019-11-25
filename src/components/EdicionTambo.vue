<template>
  <div>
    <b-container>
      <!-- Título del cuadro modal -->
      <b-row>
        <b-col>
            <!-- Puede ser "creación" o "edición" -->
            {{tipoEdicion}} de tambo
        </b-col>
      </b-row>

      <!-- Contenido del modal -->
      <b-row>
          <b-col>

          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
    name: "edicionTambo",
    props: {
        tipoEdicion: String
    }
}
</script>