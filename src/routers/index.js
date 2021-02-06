import {createRouter, createWebHistory} from 'vue-router';
import Guard from './guard';
import Home from './Home';
import Admin from './Admin';

const routes = [...Home, ...Admin];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes
});

Guard.authenticate(router);

export default router;
