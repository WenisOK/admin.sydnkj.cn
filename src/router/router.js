import { createRouter, createWebHistory } from 'vue-router';

import Index from '../page/index.vue';
import Login from '../page/login.vue';

const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
