import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import curriculum from "../views/curriculum/curriculum.vue";
import Demo from "../views/Demo/Demo.vue";
import Registration from "../views/registration/register.vue"; 
import HireFromUs from "../views/Hirefromus/hirefromus.vue";
const routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "/curriculum/:year",
    component: curriculum,
  },
  {
    path: "/demo",
    component: Demo,
  },
   {
    path: "/register",
    component: Registration,
  },
  {
    path: "/hirefromus",         
    component: HireFromUs,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
