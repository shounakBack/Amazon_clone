import firebase from "firebase";
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAolbb84Hssxu-9BlPAbKuj9jv7GY3_CDE",
    authDomain: "clone-a0b3a.firebaseapp.com",
    projectId: "clone-a0b3a",
    storageBucket: "clone-a0b3a.appspot.com",
    messagingSenderId: "311768791161",
    appId: "1:311768791161:web:51d5b42b67ba073ce63ca8",
    measurementId: "G-3Z497DJL6X"
});
const auth=firebase.auth();
export {auth};