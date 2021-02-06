import {auth} from './firebase.util';
import jwt_decode from 'jwt-decode';

const formatPhone = (phone) => {
  const reg = /([0-9]{9})\b/;
  if (reg.test(phone)) return '+84' + phone;
  return false;
};

const unFormatPhone = (phone) => {
  return phone.replace('+84', '0');
};

const checkPhone = async (formatedPhone, recaptchaVerifier) => {
  const confirmationResult = auth.signInWithPhoneNumber(formatedPhone, recaptchaVerifier);
  return confirmationResult;
};

const confirmOTP = (confirmationResult, otp) => {
  return confirmationResult.confirm(otp);
};

const decodeToken = (token) => {
  return jwt_decode(token);
};

export {formatPhone, unFormatPhone, checkPhone, confirmOTP, decodeToken};
