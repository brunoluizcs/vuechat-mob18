import firebase from 'firebase/app';
import firestore from 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyAo_gAxe0wFXa_1Mk6QPMGMtEbwn62J5BE",
    authDomain: "sunshine-185000.firebaseapp.com",
    databaseURL: "https://sunshine-185000.firebaseio.com",
    projectId: "sunshine-185000",
    storageBucket: "sunshine-185000.appspot.com",
    messagingSenderId: "436868730003",
    appId: "1:436868730003:web:3630f8589b142a24ddd166"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()