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
const messaging = firebase.messaging();

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({ vapidKey: 'AIzaSyDZVk-NIPhI2j7gEFRusly_sohbYYcYOBg' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

export { auth, db };
