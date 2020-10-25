import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCR7f04dMK_mPVDOY5-wtu773QQyVfyHwo",
    authDomain: "receipt-a745b.firebaseapp.com",
    databaseURL: "https://receipt-a745b.firebaseio.com",
    projectId: "receipt-a745b",
    storageBucket: "receipt-a745b.appspot.com",
    messagingSenderId: "427492176214",
    appId: "1:427492176214:web:db5fcb58a403b4d17fe6f7"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth()
