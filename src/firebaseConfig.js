import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCjQCXSvZpKXJ6C6OMh0XGiTCWwdLefMfQ",
    authDomain: "clock-a8af3.firebaseapp.com",
    projectId: "clock-a8af3",
    storageBucket: "clock-a8af3.appspot.com",
    messagingSenderId: "839934205250",
    appId: "1:839934205250:web:61df641806f0328ca6bcdb",
    measurementId: "G-N00521S39X"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
export { auth, provider };