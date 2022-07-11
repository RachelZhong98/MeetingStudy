import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiaXJVmlJY2Alv6F5OKTmlwPf0Z8F-PUk",
  authDomain: "ghost-trails.firebaseapp.com",
  databaseURL: "https://ghost-trails.firebaseio.com",
  projectId: "ghost-trails",
  storageBucket: "ghost-trails.appspot.com",
  messagingSenderId: "451449386104",
  appId: "1:451449386104:web:2ad1778f421df2c335698d",
  measurementId: "G-7BYQWNR11H",
  // apiKey: "AIzaSyAiah2Ftz0OLENUxvx9VaaojDJsa936NII",
  // authDomain: "spud-93a30.firebaseapp.com",
  // databaseURL: "https://spud-93a30.firebaseio.com",
  // projectId: "spud-93a30",
  // storageBucket: "spud-93a30.appspot.com",
  // messagingSenderId: "111712193172",
  // appId: "1:111712193172:web:5a61fc378f4e2290",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export default firebase;
