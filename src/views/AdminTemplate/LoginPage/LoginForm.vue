<template>
  <form v-if="loginStep === 1" class="form-signin" @submit.prevent="submitLoginForm">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default">+84</span>
      </div>
      <input
        type="number"
        class="form-control"
        v-model="phone"
        placeholder="Số điện thoại"
        required
        autofocus
      />
    </div>
    <p v-if="phoneErrorMessage" class="text-center text-danger recaptcha-warning">
      {{ phoneErrorMessage }}
    </p>
    <div id="admin-login-form-btn"></div>
    <button
      id="admin-login-form-btn"
      class="btn-lg btn-block text-uppercase bttn-unite bttn-success"
      type="submit"
      :disabled="loading"
      :class="{'btn-loading': loading}"
    >
      <span
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
        :class="{'login-spinner': !loading}"
      ></span
      >Tiếp tục
    </button>
    <p v-show="errorMessage" class="text-center text-danger recaptcha-warning">
      {{ errorMessage }}
    </p>
  </form>
</template>

<script>
import * as types from '../../../store/auth/constants';
import {firebase} from '../../../utils/firebase.util';
import {createHelpers} from 'vuex-map-fields';
import {mapState} from 'vuex';

const {mapFields} = createHelpers({
  getterType: 'getFieldForm',
  mutationType: 'updateFieldForm'
});

export default {
  computed: {
    ...mapFields('auth', ['phone']),
    ...mapState('auth', ['errorMessage', 'phoneErrorMessage', 'loginStep', 'loading'])
  },
  mounted() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('admin-login-form-btn', {
      size: 'invisible'
    });
  },
  methods: {
    submitLoginForm() {
      this.$store.dispatch(`auth/${types.A_SEND_OTP}`);
    }
  }
};
</script>

<style scoped>
.spinner-border {
  margin-right: 8px;
  margin-bottom: 4px;
  vertical-align: middle;
}

.login-spinner {
  display: none;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-group label {
  padding-left: 6px;
}

.input-group {
  margin-bottom: 2vh;
}

.input-group-text {
  border-radius: 12px 0 0 12px;
}

.form-control {
  border-radius: 12px 12px 12px 12px;
}

.bttn-unite {
  border-radius: 32px;
  outline: none;
}

.btn-loading {
  cursor: no-drop;
}
</style>
