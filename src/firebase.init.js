// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: 'AIzaSyAIiZkSGkqBEyGbwcAy0gmeVq2mW8S8Y-s',
      authDomain: 'biostar2-d38fa.firebaseapp.com',
      projectId: 'biostar2-d38fa',
      storageBucket: 'biostar2-d38fa.appspot.com',
      messagingSenderId: '793985873602',
      appId: '1:793985873602:web:b5d7362306ae076ef7ed5b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
