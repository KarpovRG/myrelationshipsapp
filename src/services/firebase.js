import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// Экспортируем готовые инстансы auth и firestore
// Инициализация происходит нативно
export const firebaseAuth = auth();
export const firestoreDB = firestore();
