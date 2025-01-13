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
