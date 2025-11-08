import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase будет инициализирован нативно
// так что нам не нужен firebaseConfig здесь

const auth = getAuth();
const firestore = getFirestore();

export { auth, firestore };
