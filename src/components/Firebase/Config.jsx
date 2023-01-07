// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.APIPKEY,
  authDomain: 'portofilio-4600e.firebaseapp.com',
  projectId: 'portofilio-4600e',
  storageBucket: 'portofilio-4600e.appspot.com',
  messagingSenderId: '549335341674',
  appId: '1:549335341674:web:b46f207d703ab8a7c94813',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
