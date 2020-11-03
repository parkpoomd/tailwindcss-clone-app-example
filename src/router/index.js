import { createRouter, createWebHashHistory } from 'vue-router';
import Twitter from '../views/Twitter.vue';

const routes = [
  {
    path: '/twitter',
    name: 'Twitter',
    component: Twitter
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
