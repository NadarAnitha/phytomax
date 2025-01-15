// Import the Firebase SDK
import { getStorage, ref, uploadBytes } from "firebase/storage";

// Get a reference to the storage service
const storage = getStorage();

// Create a reference to the file you want to upload
const storageRef = ref(storage, 'images/my-image.jpg');

// Upload the file
uploadBytes(storageRef, file)
  .then((snapshot) => {
    // File uploaded successfully
    console.log('Uploaded file!');
  })
  .catch((error) => {
    // Handle any errors
    console.error('Error uploading file:', error);
  });
  import firebase from 'firebase/app';
  import 'firebase/database';
  
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    databaseURL: 'https://phytomax-c4254-default-rtdb.firebaseio.com',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
  };
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the database
  const database = firebase.database();
  
  // Example: Writing data
  database.ref('users/1').set({
    username: 'JohnDoe',
    email: 'john.doe@example.com'
  });
  
  // Example: Reading data
  database.ref('users/1').once('value').then(snapshot => {
    const userData = snapshot.val();
    console.log(userData);
  });
  