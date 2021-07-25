import firebase from 'firebase';

 
const config = { 
    apiKey: "AIzaSyDZVk-NIPhI2j7gEFRusly_sohbYYcYOBg",
    authDomain: "newsletter-login-3f836.firebaseapp.com",
    projectId: "newsletter-login-3f836",
    storageBucket: "newsletter-login-3f836.appspot.com",
    messagingSenderId: "747630606366",
    appId: "1:747630606366:web:b3f72857f4e7454475560f"
  };
  const fire = firebase.initializeApp(config);
  export default fire;