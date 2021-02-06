// Mutations
export const M_AUTH_REQUEST = 'auth/M_AUTH_REQUEST';
export const M_AUTH_SUCCESS = 'auth/M_AUTH_SUCCESS';
export const M_AUTH_FAILED = 'auth/M_AUTH_FAILED';
export const M_AUTH_OTP_REQUEST = 'auth/M_AUTH_OTP_REQUEST';
export const M_AUTH_OTP_SUCCESS = 'auth/M_AUTH_OTP_SUCCESS';
export const M_AUTH_OTP_FAILED = 'auth/M_AUTH_OTP_FAILED';
export const M_AUTH_CLEAR = 'auth/M_AUTH_CLEAR';
export const M_AUTH_ALLOW_RESEND_OTP = 'auth/M_AUTH_RESEND_OTP';

// Actions
export const A_SEND_OTP = 'auth/A_SEND_OTP';
export const A_VERIFY_OTP = 'auth/A_VERIFY_OTP';
export const A_ADMIN_LOGIN = 'auth/A_ADMIN_LOGIN';
export const A_TRY_LOGIN = 'auth/A_TRY_LOGIN';
export const A_LOGOUT = 'auth/A_LOGOUT';

// Error Texts
export const ERROR_TEXT = {
  cannotSendOTP: 'Không thể gửi mã xác nhận đến số điện thoại của bạn',
  expiredOTP: 'Mã xác nhận đã hết hạn',
  wrongOTP: 'Mã xác nhận không đúng',
  undefinedError: 'Opps! Đã có lỗi xảy ra. Vui lòng thử lại sau!'
};
