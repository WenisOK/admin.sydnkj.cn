import { createRouter, createWebHistory } from 'vue-router';

import Index from '../page/index.vue';
import Login from '../page/login.vue';
import createArticle from '../page/create/article.vue';

const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/create/article',
    component: createArticle,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
