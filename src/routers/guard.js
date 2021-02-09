import {decodeToken} from '../utils/auth.util';
import {getItem} from '../utils/localStorageUtils';

const authenticate = (router) => {
  router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.adminAuth)) {
      if (getItem('token')) {
        try {
          const user = await decodeToken(getItem('token'));
          if (user.type === '1') {
            if (to.path === '/admin') {
              next({path: '/admin/welcome'});
            }
            next();
          }
        } catch {
          next({path: '/admin/auth'});
        }
      } else {
        next({path: '/admin/auth'});
      }
    } else {
      next();
    }
  });
};

export default {authenticate};
