import {createRouter, createWebHashHistory} from 'vue-router';
import Guard from './guard';
import Home from './Home';
import Admin from './Admin';

const routes = [...Home, ...Admin];

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: 'active',
  routes
});

Guard.authenticate(router);

export default router;
