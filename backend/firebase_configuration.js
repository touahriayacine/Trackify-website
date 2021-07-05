var firebaseConfig = {
    apiKey: "AIzaSyAM3TFhrUtk6P14oLeoF7A6lNykLA4eiFA",
    authDomain: "projet2cp-4b52e.firebaseapp.com",
    projectId: "projet2cp-4b52e",
    storageBucket: "projet2cp-4b52e.appspot.com",
    messagingSenderId: "485041888870",
    appId: "1:485041888870:web:40379d48368efc631c57a7"
  };


firebase.initializeApp(firebaseConfig);
firebase.analytics();
let cloudDB = firebase.firestore();
const auth = firebase.auth();
