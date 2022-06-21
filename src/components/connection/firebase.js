import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA_3Ix0zmp5Po4jS4RmxXH_F02utjS0cOs",
    authDomain: "reportbyte-72c2e.firebaseapp.com",
    projectId: "reportbyte-72c2e",
    storageBucket: "reportbyte-72c2e.appspot.com",
    messagingSenderId: "772456719001",
    appId: "1:772456719001:web:35905eae151a815f6ace08",
    measurementId: "G-TF2ZXR7469"
  };

  
firebase.initializeApp(firebaseConfig);



export default firebase;