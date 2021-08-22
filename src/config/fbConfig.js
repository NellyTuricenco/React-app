import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDw9srBLjLfA4vEEIf_PMRU_nl3xPSld_U",
  authDomain: "reactapp-a825b.firebaseapp.com",
  projectId: "reactapp-a825b",
  storageBucket: "reactapp-a825b.appspot.com",
  messagingSenderId: "949435577467",
  appId: "1:949435577467:web:aa30416aad6d4d0e601ede",
  measurementId: "G-131ZGXJMM9",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
