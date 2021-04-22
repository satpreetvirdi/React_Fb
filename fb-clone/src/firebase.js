// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAk0_2IzMvHreVKu9I-RFD3tN9ZPmCae_c",
    authDomain: "facebook-clone-b76fe.firebaseapp.com",
    projectId: "facebook-clone-b76fe",
    storageBucket: "facebook-clone-b76fe.appspot.com",
    messagingSenderId: "898311031557",
    appId: "1:898311031557:web:353c10cd0f472e7664456c",
    measurementId: "G-FLKT8J22HV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore ();

// Auth 
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;