import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue"
import curriculum from "../views/curriculum/curriculum.vue"
import Demo from "../views/Demo/Demo.vue"

const routes = [
    {
        path: '',
        component: Home,
    },{
      path: '/curriculum/:year',
      component: curriculum
    },
    {
      path: '/demo',
      component: Demo
    }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes,
});

export default router;