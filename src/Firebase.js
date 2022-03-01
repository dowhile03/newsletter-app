import firebase from 'firebase';
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyDZVk-NIPhI2j7gEFRusly_sohbYYcYOBg",
  authDomain: "newsletter-login-3f836.firebaseapp.com",
  projectId: "newsletter-login-3f836",
  storageBucket: "newsletter-login-3f836.appspot.com",
  messagingSenderId: "747630606366",
  appId: "1:747630606366:web:b3f72857f4e7454475560f",
  measurementId: "G-E422ME4880"
});

var auth = firebase.auth();
var db = firebase.firestore();
const analytics = firebase.analytics();

export { auth, db };
