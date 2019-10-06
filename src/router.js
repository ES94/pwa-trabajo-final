import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "inicio",
      component: () => import(/* webpackChunkName: "inicio" */ "./views/Inicio.vue")
    },
    {
      path: "/animales",
      name: "animales",
      component: () =>
        import(/* webpackChunkName: "animales" */ "./views/Animales.vue")
    },
    {
      path: "/crias",
      name: "crias",
      component: () =>
        import(/* webpackChunkName: "crias" */ "./views/Crias.vue")
    },
    {
      path: "/produccion",
      name: "produccion",
      component: () =>
        import(/* webpackChunkName: "produccion" */ "./views/Produccion.vue")
    },
    {
      path: "/reproduccion",
      name: "reproduccion",
      component: () =>
        import(
          /* webpackChunkName: "reproduccion" */ "./views/Reproduccion.vue"
        )
    },
    {
      path: "/tacto",
      name: "tacto",
      component: () =>
        import(/* webpackChunkName: "tacto" */ "./views/Tacto.vue")
    },
    {
      path: "/historial",
      name: "historial",
      component: () =>
        import(/* webpackChunkName: "historial" */ "./views/Historial.vue")
    },
    {
      path: "/inconsistencias",
      name: "inconsistencias",
      component: () =>
        import(
          /* webpackChunkName: "inconsistencias" */ "./views/Inconsistencias.vue"
        )
    }
  ]
});
