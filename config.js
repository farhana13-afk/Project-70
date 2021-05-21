import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyCEiIR7fQrQfs5YxomNDEWLD3IXtWW7JxE",
    authDomain: "storyhub-49fc5.firebaseapp.com",
    projectId: "storyhub-49fc5",
    storageBucket: "storyhub-49fc5.appspot.com",
    messagingSenderId: "532094815876",
    appId: "1:532094815876:web:e84434a9fec9a960c07cd1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();