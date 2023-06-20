import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  // Your Firebase configuration
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const insertFormData = async (data: any) => {
  try {
    await db.collection('contacts').add(data);
    console.log('Form data inserted successfully in Firestore!');
  } catch (error) {
    console.error('Error inserting form data:', error);
  }
};

const dbService = {
  post: {
    insert: insertFormData,
  },
};

export default dbService;
