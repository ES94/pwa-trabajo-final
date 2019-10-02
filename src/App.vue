<template>
  <div id="app">
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">DIRSA</b-navbar-brand>
        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav vertical>
            <b-nav-item to="/">Inicio</b-nav-item>
            <b-nav-item to="/about">Acerca</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view class="text-center" />
  </div>
</template>