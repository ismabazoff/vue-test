import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ChangeNote from "../views/ChangeNote.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/change-note/:index",
    name: "ChangeNote",
    component: ChangeNote,
  },
];

const router = new VueRouter({
  routes,
  mode: "history", // Чтобы в адресной строке были нормальный url,а не через #
});

export default router;
