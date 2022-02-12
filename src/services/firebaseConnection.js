import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: "AIzaSyDcm1D6P_ljyNDb1T-k-IfE2CYNOtG005I",
  authDomain: "atendimentoreact.firebaseapp.com",
  projectId: "atendimentoreact",
  storageBucket: "atendimentoreact.appspot.com",
  messagingSenderId: "1088670029673",
  appId: "1:1088670029673:web:cb5918acf27c4aec3c0ff8",
  measurementId: "G-XRDJ912RZJ"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;