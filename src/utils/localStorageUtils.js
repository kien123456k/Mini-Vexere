import jwt_decode from 'jwt-decode';

export const getItem = (key, defaultValue = '""') => {
  if (typeof localStorage !== 'undefined') {
    let item = localStorage.getItem(key);
    if (item && item === 'undefined') item = defaultValue;
    return JSON.parse(item);
  }
  return undefined;
};

export const setItem = (key, value = '') => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeItem = (key) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(key);
  }
};

export const clearItems = () => {
  if (typeof localStorage !== 'undefined') {
    localStorage.clear();
  }
};

export const getUser = () => {
  if (typeof localStorage !== 'undefined') {
    const token = this.getItem('token');
    if (token) {
      try {
        jwt_decode(token);
        return jwt_decode(token);
      } catch (ex) {
        if (ex.response && ex.response.status === 401) {
          this.deleteUser();
        }
      }
    } else return token;
  }
  return undefined;
};

export const deleteUser = () => {
  this.removeItem('token');
  window.location.reload(false);
};
