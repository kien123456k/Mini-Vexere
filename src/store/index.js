import {createStore} from 'vuex';
import station from './station';
import auth from './auth';
import user from './user';

export default createStore({
  modules: {user, station, auth}
});
