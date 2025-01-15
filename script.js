document.getElementById("contactForm").addEventListener("submit", function(event) {
    let valid = true;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Check if fields are empty
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("All fields are required!");
        valid = false;
    }

    // Check if email is valid
    if (valid && !validateEmail(email)) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Function to validate email format
function validateEmail(email) {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// User Authentication
const auth = firebase.auth();
function signUp() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Signup successful!");
        })
        .catch(error => {
            alert(error.message);
        });
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Login successful!");
        })
        .catch(error => {
            alert(error.message);
        });
}
"scripts": {
  "build": "webpack --mode production"
}
