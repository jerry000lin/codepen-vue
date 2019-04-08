import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/button",
      name: "button",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ButtonTest")
    },
    {
      path: "/text",
      name: "text",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/TextTest")
    },
    {
      path: "/card",
      name: "card",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/CardTest")
    },
    {
      path: "/test",
      name: "test",
      component: () => import("./views/Test")
    }
  ]
});
