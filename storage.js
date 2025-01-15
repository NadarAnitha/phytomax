import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase (replace with your config)
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};
firebase.initializeApp(firebaseConfig);

// Reference to Firebase Storage
const storage = firebase.storage();

// File to upload (from input field)
const file = document.getElementById('fileInput').files[0];

// Create a storage reference
const storageRef = storage.ref('uploads/' + file.name);

// Upload the file
storageRef.put(file).then((snapshot) => {
  console.log('File uploaded successfully');
}).catch((error) => {
  console.error('Error uploading file:', error);
});
