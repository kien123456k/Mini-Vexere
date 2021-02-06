import * as types from './constants';
import {get, post, remove} from '../../utils/apiCaller.util';
import {VERSION} from '../../config';
// import router from '../../routers';

const state = {
  stations: null,
  pages: 0,
  entries: 0,
  loading: false,
  errorMessage: ''
};

const mutations = {
  [types.M_STATION_REQUEST](state) {
    state.stations = null;
    state.errorMessage = '';
    state.loading = true;
  },
  [types.M_STATION_SUCCESS](state, payload) {
    state.stations = payload.data.data;
    if (payload.data.table) {
      state.pages = payload.data.table.pages;
      state.entries = payload.data.table.entries;
    }
    state.errorMessage = '';
    state.loading = false;
  },
  [types.M_STATION_FAILED](state, payload) {
    state.stations = null;
    state.errorMessage = payload.errorMessage;
    state.loading = false;
  }
};

const actions = {
  async [types.A_GET_STATION_PAGE]({commit}, tableStatus) {
    await commit(types.M_STATION_REQUEST);
    try {
      const response = await get(
        `/api/${VERSION}/stations?page=${tableStatus.page}&limit=${tableStatus.limit}`
      );
      await commit(types.M_STATION_SUCCESS, response);
    } catch (error) {
      console.log(error);
      commit(types.M_STATION_FAILED, {errorMessage: types.ERROR_TEXT});
    }
  },
  async [types.A_GET_ALL_STATIONS]({commit}) {
    await commit(types.M_STATION_REQUEST);
    try {
      const response = await get(`/api/${VERSION}/stations`);
      await commit(types.M_STATION_SUCCESS, response);
    } catch (error) {
      console.log(error);
      await commit(types.M_STATION_FAILED, {errorMessage: types.ERROR_TEXT});
    }
  },
  async [types.A_GET_DETAIL_STATION]({commit}, stationInfo) {
    await commit(types.M_STATION_REQUEST);
    try {
      const response = await get(`/api/${VERSION}/stations/${stationInfo._id}`);

      await commit(types.M_STATION_SUCCESS, response);
    } catch (error) {
      await commit(types.M_STATION_FAILED, {errorMessage: types.ERROR_TEXT});
    }
  },
  async [types.A_DELETE_STATION]({commit}, stationInfo) {
    await commit(types.M_STATION_REQUEST);
    try {
      const response = await remove(`/api/${VERSION}/stations/${stationInfo._id}`);

      await commit(types.M_STATION_SUCCESS, response);
    } catch (error) {
      await commit(types.M_STATION_FAILED, {errorMessage: types.ERROR_TEXT});
    }
  },
  async [types.A_ADD_STATION]({commit}, stationInfo) {
    await commit(types.M_STATION_REQUEST);
    try {
      const response = await post(`/api/${VERSION}/stations`, {
        name: stationInfo.name,
        address: stationInfo.address,
        province: stationInfo.province,
        description: stationInfo.description,
        imageUrl: stationInfo.imageUrl
      });

      await commit(types.M_STATION_SUCCESS, response);
    } catch (error) {
      const err = error.response;
      if (err && err.data) {
        if (err.data.status === 'fail') {
          await commit(types.M_STATION_FAILED, {
            errorMessage: err.data.message
          });
          return;
        }
        await commit(types.M_STATION_FAILED, {
          errorMessage: types.ERROR_TEXT.undefinedError
        });
      }
    }
  }
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
