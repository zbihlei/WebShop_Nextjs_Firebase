import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAA4tFw2fJ3y--BsCYEW0xDJ1u1TGbMbo8",
    authDomain: "webshop-test-e3815.firebaseapp.com",
    projectId: "webshop-test-e3815",
    storageBucket: "webshop-test-e3815.appspot.com",
    messagingSenderId: "258916380690",
    appId: "1:258916380690:web:633d4ecb243071a76ce8cb"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);