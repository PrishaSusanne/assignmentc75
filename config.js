
// Config file
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAvz53ITfIT60DfA9llwVhbIS5SdqQGuns",
  authDomain: "bedtimestories-d4724.firebaseapp.com",
  databaseURL: "https://bedtimestories-d4724.firebaseio.com",
  projectId: "bedtimestories-d4724",
  storageBucket: "bedtimestories-d4724.appspot.com",
  messagingSenderId: "731167296430",
  appId: "1:731167296430:web:fc7096ea7861e81be5963f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Other file
// import firebase from '../firebase';

console.log(firebase.name);
console.log(firebase.database());