
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBYDe-yBM8BMaRtQMLPM7MnxEd-QmTi0qo',
  authDomain: 'portfolio-c646c.firebaseapp.com',
  projectId: 'portfolio-c646c',
  storageBucket: 'portfolio-c646c.appspot.com',
  messagingSenderId: '380325071444',
  appId: '1:380325071444:web:94fefae3ce36c9a95d3bc1',
  measurementId: 'G-SDT9R3DTJ6'
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };