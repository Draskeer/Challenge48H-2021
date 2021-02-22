import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Search",
    component: () => import("../views/Search.vue")
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("../views/Create.vue")
  },
  {
    path: "/update/:id",
    name: "Update",
    component: () => import("../views/Update.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
