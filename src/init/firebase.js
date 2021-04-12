import firebase from "firebase";
import "firebase/auth"
import "firebase/firestore"

let firebaseConfig = {
    apiKey: "AIzaSyACtgZ3RVsV4asdNWLtlbTtbrb-BocsXjk",
    authDomain: "wishlist-for-friends.firebaseapp.com",
    projectId: "wishlist-for-friends",
    storageBucket: "wishlist-for-friends.appspot.com",
    messagingSenderId: "491027786294",
    appId: "1:491027786294:web:ed36804351917d5052c697"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
