<template>
  <form v-if="loginStep === 2" class="form-signin" @submit.prevent="verifyLoginData">
    <div class="form-group">
      <label for="inputOTP"
        >Nhập mã xác thực vừa được gửi đến <strong>{{ '0' + phone }}</strong></label
      >
      <input
        type="number"
        class="form-control"
        id="inputOTP"
        v-model="otp"
        placeholder="Nhập mã OTP"
        autofocus
        required
      />
      <p v-if="otpErrorMessage" class="text-center text-danger">
        {{ otpErrorMessage }}
      </p>
      <div class="otp-help">
        <p :class="{'resend-otp': !isAllowResendOTP}" @click="resendOTP">Gửi lại OTP</p>
        <template v-if="!isAllowResendOTP">
          <CountdownTimer :minute="otpResendTime" @allowResendOTP="allowResendOTP"
        /></template>
      </div>
      <p class="text-center">
        <span class="reset-form-text" @click="reinputPhone">Nhập số điện thoại khác</span>
      </p>
    </div>
    <button
      class="btn-lg btn-block text-uppercase bttn-unite bttn-success"
      type="submit"
      :disabled="loading"
      :class="{'btn-loading': loading}"
      @click="submitLoginVerifier"
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
import CountdownTimer from '../../../components/CountdownTimer';
import {createHelpers} from 'vuex-map-fields';
import {mapState} from 'vuex';

const {mapFields} = createHelpers({
  getterType: 'getFieldForm',
  mutationType: 'updateFieldForm'
});

export default {
  components: {
    CountdownTimer
  },
  data() {
    return {
      otpResendTime: 2
    };
  },
  computed: {
    ...mapFields('auth', ['otp', 'isAllowResendOTP']),
    ...mapState('auth', ['phone', 'otpErrorMessage', 'errorMessage', 'loginStep', 'loading'])
  },
  methods: {
    submitLoginVerifier() {
      this.$store.dispatch(`auth/${types.A_VERIFY_OTP}`);
    },
    allowResendOTP() {
      this.isAllowResendOTP = true;
    },
    resendOTP() {
      this.$store.dispatch(`auth/${types.A_SEND_OTP}`);
    },
    reinputPhone() {
      window.location.reload();
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

.text-center {
  margin-bottom: 0;
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

.otp-help {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 6px;
  padding-right: 6px;
}

.otp-help p {
  font-weight: 500;
  color: #27ae60;
  margin-bottom: 0;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
}

.resend-otp {
  opacity: 0.5;
  cursor: not-allowed !important;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
}

.reset-form-text {
  font-weight: 500;
  color: #27ae60;
  margin-bottom: 0;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;
}

.reset-form-text:hover {
  opacity: 1;
}

.btn-loading {
  cursor: no-drop;
}
</style>
