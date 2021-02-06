import * as types from './constants';
import {get} from '../../utils/apiCaller.util';
import {VERSION} from '../../config';
// import router from '../../routers';

const state = {
  users: null,
  pages: 0,
  entries: 0,
  loading: false,
  errorMessage: ''
};

const mutations = {
  [types.M_USER_REQUEST](state) {
    state.users = null;
    state.errorMessage = '';
    state.loading = true;
  },
  [types.M_USER_SUCCESS](state, payload) {
    state.users = payload.data.data;
    state.pages = payload.data.table.pages;
    state.entries = payload.data.table.entries;
    state.errorMessage = '';
    state.loading = false;
  },
  [types.M_USER_FAILED](state, payload) {
    state.users = null;
    state.errorMessage = payload.errorMessage;
    state.loading = false;
  }
};

const actions = {
  async [types.A_GET_USER_PAGE]({commit}, tableStatus) {
    commit(types.M_USER_REQUEST);
    try {
      const response = await get(
        `/api/${VERSION}/users?page=${tableStatus.page}&limit=${tableStatus.limit}`
      );
      await commit(types.M_USER_SUCCESS, response);
    } catch (error) {
      console.log(error);
      commit(types.M_USER_FAILED, {errorMessage: types.ERROR_TEXT});
    }
  }
  // fetchDetailStation({commit}, id) {
  //   commit(types.M_STATION_REQUEST);
  // api
  //   .get(`/api/stations/${id}`)
  //   .then((result) => {
  //     commit(types.M_STATION_SUCCESS, result.data);
  //   })
  //   .catch((err) => {
  //     commit(types.M_STATION_FAILED, err);
  //   });
  // },
  // fetchDeleteStation({commit, dispatch}, id) {
  // api
  //   .delete(`/api/stations/${id}`)
  //   .then(() => {
  //     dispatch(types.A_FETCH_LIST_STATION);
  //   })
  //   .catch((err) => {
  //     commit(types.M_STATION_FAILED, err);
  //   });
  // },
  // fetchUpdateStation({commit}, formStation) {
  //   commit(types.M_STATION_REQUEST);
  // api
  //   .put(`api/stations/${formStation.id}`, formStation)
  //   .then((result) => {
  //     commit(types.M_STATION_SUCCESS, result.data);
  //     console.log('Kien');
  //     router.push('/admin/stations');
  //   })
  //   .catch((err) => {
  //     commit(types.M_STATION_FAILED, err);
  //   });
  // }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
