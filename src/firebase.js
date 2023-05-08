// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDqklmnXvizQ7D3Nc6k2wsuXPXR7dFqSLQ',
    authDomain: 'dinkylink-904e9.firebaseapp.com',
    projectId: 'dinkylink-904e9',
    storageBucket: 'dinkylink-904e9.appspot.com',
    messagingSenderId: '361677666953',
    appId: '1:361677666953:web:7a1c3a2558b0e2299de458',
    measurementId: 'G-0JFLD9RZZ1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;

//firebase login
//firebase init
//firebase deploy
//After deploying, view your app at dinkylink-904e9.web.app
