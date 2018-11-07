import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAdshZjPbsfej7al34vec6C1VbtC6Cs3NU',
  authDomain: 'auth-2fa7d.firebaseapp.com',
  databaseURL: 'https://auth-2fa7d.firebaseio.com',
  projectId: 'auth-2fa7d',
  storageBucket: 'auth-2fa7d.appspot.com',
  messagingSenderId: '1038909932095',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const auth = firebase.auth();

export { auth };
