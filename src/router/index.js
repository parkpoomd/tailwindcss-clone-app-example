import { createRouter, createWebHashHistory } from 'vue-router';
import Twitter from '../views/Twitter.vue';
import Spotify from '../views/Spotify.vue';

const routes = [
  {
    path: '/twitter',
    name: 'Twitter',
    component: Twitter
  },
  {
    path: '/spotify',
    name: 'Spotify',
    component: Spotify
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
