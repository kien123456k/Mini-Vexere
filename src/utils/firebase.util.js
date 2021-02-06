import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAfu8GyFymR2HZ0hzFBm5XhS0jff_JDaXc',
  authDomain: 'coach-booking-system.firebaseapp.com',
  projectId: 'coach-booking-system',
  storageBucket: 'coach-booking-system.appspot.com',
  messagingSenderId: '67874819509',
  appId: '1:67874819509:web:5d1dc042336755a34c5dfc',
  measurementId: 'G-GZ21HRTFVC'
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
auth.useDeviceLanguage();

export {auth, firebase};
