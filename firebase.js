import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBmzcWhz10-HTyxNOZt2Ls6bA9KRXGIIZo",
    authDomain: "hakaton23-14594.firebaseapp.com",
    databaseURL: "https://hakaton23-14594-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hakaton23-14594",
    storageBucket: "hakaton23-14594.appspot.com",
    messagingSenderId: "1074130029818",
    appId: "1:1074130029818:web:23a54f8df3aa4b9c324d43"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
