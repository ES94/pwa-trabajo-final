<template>
  <div id="app" class="b-container">
    <!-- Navegación -->
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand to="/">DIRSA</b-navbar-brand>
        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <b-nav-item to="/">Inicio</b-nav-item>
            <b-nav-item to="/animales">Animales</b-nav-item>
            <b-nav-item to="/crias">Crias</b-nav-item>
            <b-nav-item to="/produccion">Produccion</b-nav-item>
            <b-nav-item to="/reproduccion">Reproduccion</b-nav-item>
            <b-nav-item to="/tacto">Tacto</b-nav-item>
            <b-nav-item to="/historial">Historial</b-nav-item>
            <b-nav-item to="/inconsistencias">Inconsistencias</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <!-- Contenido -->
    <router-view class="text-center" />

    <!-- página con sidebar -->
    <!-- <b-row>
      <b-col md="2">
        <b-nav vertical toggleable="sm">
          <b-container>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-navbar-brand to="/">DIRSA</b-navbar-brand>
            <b-collapse is-nav id="nav-collapse">
              <b-navbar-nav>
                <b-button squared variant="primary" to="/">Inicio</b-button>
                <b-button squared variant="primary" to="/about">Acerca</b-button>
              </b-navbar-nav>
            </b-collapse>
          </b-container>
        </b-nav>
      </b-col>
      <b-col md="10">
        <router-view class="text-center" />
      </b-col>
    </b-row> -->
  </div>
</template>