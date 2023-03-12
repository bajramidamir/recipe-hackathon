import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBmzcWhz10-HTyxNOZt2Ls6bA9KRXGIIZo",
    authDomain: "hakaton23-14594.firebaseapp.com",
    databaseURL: "https://hakaton23-14594-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hakaton23-14594",
    storageBucket: "hakaton23-14594.appspot.com",
    messagingSenderId: "1074130029818",
    appId: "1:1074130029818:web:23a54f8df3aa4b9c324d43"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }