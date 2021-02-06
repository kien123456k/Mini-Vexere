import * as types from './constants';
import {formatPhone, unFormatPhone, checkPhone, confirmOTP} from '../../utils/auth.util';
import {createHelpers} from 'vuex-map-fields';
import {get, post} from '../../utils/apiCaller.util';
import {VERSION} from '../../config';
import {setItem, getItem, removeItem} from '../../utils/localStorageUtils';
import {decodeToken} from '../../utils/auth.util';
import router from '../../routers';

const {getFieldForm, updateFieldForm} = createHelpers({
  getterType: 'getFieldForm',
  mutationType: 'updateFieldForm'
});

const state = {
  token: null,
  loading: false,
  loginStep: 1,
  phone: null,
  otp: null,
  wrongTimes: 0,
  errorMessage: '',
  phoneErrorMessage: '',
  otpErrorMessage: '',
  confirmationresponse: null,
  isAllowResendOTP: false
};

const getters = {
  getFieldForm
};

const mutations = {
  [types.M_AUTH_OTP_REQUEST](state) {
    state.confirmationresponse = null;
    state.errorMessage = '';
    state.phoneErrorMessage = '';
    state.loading = true;
  },
  [types.M_AUTH_OTP_SUCCESS](state, payload) {
    state.confirmationresponse = payload.confirmationresponse;
    state.errorMessage = '';
    state.phoneErrorMessage = '';
    state.wrongTimes = 0;
    state.isAllowResendOTP = false;
    state.loginStep = 2;
    state.loading = false;
  },
  [types.M_AUTH_OTP_FAILED](state, payload = {}) {
    state.token = null;
    if (payload.code) {
      state.otpErrorMessage = types.ERROR_TEXT.wrongOTP;
      state.wrongTimes++;
    }
    if (payload.otpErrorMessage) {
      state.otpErrorMessage = payload.otpErrorMessage;
    }
    if (payload.errorMessage) {
      state.errorMessage = payload.errorMessage;
    }
    if (payload.change) {
      state.errorMessage = types.ERROR_TEXT.undefinedError;
    }
    state.loading = false;
  },
  [types.M_AUTH_REQUEST](state) {
    state.token = null;
    state.errorMessage = '';
    state.otpErrorMessage = '';
    state.loading = true;
  },
  [types.M_AUTH_SUCCESS](state, payload) {
    state.token = payload.token;
    state.errorMessage = '';
    state.otpErrorMessage = '';
    state.loading = false;
  },
  [types.M_AUTH_FAILED](state, payload = {}) {
    state.token = null;
    if (payload.code) {
      state.otpErrorMessage = types.ERROR_TEXT.wrongOTP;
      state.wrongTimes++;
    }
    if (payload.otpErrorMessage) {
      state.otpErrorMessage = payload.otpErrorMessage;
    }
    if (payload.errorMessage) {
      state.errorMessage = payload.errorMessage;
    }
    if (payload.change) {
      state.errorMessage = types.ERROR_TEXT.undefinedError;
    }
    state.loading = false;
  },
  updateFieldForm,
  [types.M_AUTH_CLEAR](state) {
    state.token = null;
    state.loading = false;
    state.loginStep = 1;
    state.phone = null;
    state.otp = null;
    state.wrongTimes = 0;
    state.errorMessage = '';
    state.phoneErrorMessage = '';
    state.otpErrorMessage = '';
    state.confirmationresponse = null;
    state.isAllowResendOTP = false;
  }
};

const actions = {
  async [types.A_SEND_OTP]({commit, state}) {
    const formatedPhone = formatPhone(state.phone);

    if (!formatedPhone) {
      await commit(types.M_AUTH_OTP_FAILED, {
        phoneErrorMessage: 'Số điện thoại không hợp lệ'
      });
      return;
    }

    await commit(types.M_AUTH_OTP_REQUEST);
    try {
      const confirmationresponse = await checkPhone(formatedPhone, window.recaptchaVerifier);
      await commit(types.M_AUTH_OTP_SUCCESS, {confirmationresponse: confirmationresponse});
    } catch (error) {
      await commit(types.M_AUTH_OTP_FAILED, error);
    }
  },
  async [types.A_VERIFY_OTP]({commit, dispatch}) {
    if (state.wrongTimes >= 3) {
      await commit(types.M_AUTH_FAILED, {
        otpErrorMessage: types.ERROR_TEXT.expiredOTP
      });
      return;
    }

    await dispatch(types.A_ADMIN_LOGIN);
  },
  async [types.A_ADMIN_LOGIN]({commit, state}) {
    commit(types.M_AUTH_REQUEST);
    try {
      const result = await confirmOTP(state.confirmationresponse, state.otp);
      const response = await post(`/api/${VERSION}/users/auth/login`, {
        _uid: result.user.uid,
        phone: unFormatPhone(result.user.phoneNumber)
      });
      const token = response.data.data;

      const user = await decodeToken(token);
      if (user.type !== '1') {
        throw {errorMessage: 'Only admin phone numbers are allowed!'};
      }

      await setItem('token', token);
      await commit(types.M_AUTH_SUCCESS, {token: token});
      router.replace('/admin/welcome');
    } catch (error) {
      const err = error.response;
      if (err && err.data) {
        if (err.data.status === 'error' || err.data.status === 'fail') {
          await commit(types.M_AUTH_FAILED, {
            errorMessage: 'Your phone number is invalid to login!'
          });
        }
      } else await commit(types.M_AUTH_FAILED, error);
    }
  },
  async [types.A_TRY_LOGIN]({commit}) {
    if (!getItem('token')) {
      return;
    }

    await commit(types.M_AUTH_REQUEST);
    try {
      const response = await get(`/api/${VERSION}/users/auth/refresh`);
      const token = response.data.data ? response.data.data : getItem('token');

      setItem('token', token);
      await commit(types.M_AUTH_SUCCESS, {token: token});
    } catch (error) {
      removeItem('token');
      await commit(types.M_AUTH_FAILED, {change: true});
      return;
    }
  },
  async [types.A_LOGOUT]({commit}) {
    await commit(types.M_AUTH_CLEAR);
    removeItem('token');
    window.location.reload(false);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
