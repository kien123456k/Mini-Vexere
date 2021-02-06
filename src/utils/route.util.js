const routeBase = (path, component, meta = {}, children = [], name = '') => {
  return {path, name, component: () => import(`@/layouts/${component}`), meta, children};
};

const routeUtil = (path, component, meta = {}, children = [], name = '') => {
  return {path, name, component: () => import(`@/views/${component}`), meta, children};
};

const routeAdmin = (path, component, meta = {}, children = [], name = '') => {
  return {
    path,
    name,
    component: () => import(`@/views/AdminTemplate/${component}`),
    meta,
    children
  };
};

const routeHome = (path, component, meta = {}, children = [], name = '') => {
  return {path, name, component: () => import(`@/views/HomeTemplate/${component}`), meta, children};
};

export {routeBase, routeUtil, routeAdmin, routeHome};
