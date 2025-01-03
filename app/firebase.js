// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA6V65HBUeNHVCWEnXDsB7JDCt8z8p_2tI",
    authDomain: "task-606bf.firebaseapp.com",
    projectId: "task-606bf",
    storageBucket: "task-606bf.firebasestorage.app",
    messagingSenderId: "46980770804",
    appId: "1:46980770804:web:1164776e926f9456d8a7a1",
    measurementId: "G-BLVBG357SQ"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export { auth };
