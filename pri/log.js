// Function to validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Function to validate phone number format (simple validation)
function validatePhone(phone) {
    const re = /^[0-9]{10}$/; // Assumes a 10-digit phone number
    return re.test(String(phone));
}

// Function to handle login validation
function validateLogin() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();
    const rememberMe = document.getElementById("remember-me").checked;

    if (!email) {
        alert("Please enter your email.");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (!password) {
        alert("Please enter your password.");
        return false;
    }
    
    // Assuming successful validation
    alert("Login successful!");
    // Handle 'Remember Me' logic if needed
    if (rememberMe) {
        // Example: Save email to local storage
        localStorage.setItem('rememberedEmail', email);
    }
    return true;
}

// Function to handle sign-up validation
function validateSignup() {
    const fullName = document.getElementById("signup-fullname").value.trim();
    const phone = document.getElementById("signup-phone").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();
    const gender = document.getElementById("signup-gender").value.trim();
    const age = document.getElementById("signup-age").value.trim();

    if (!fullName) {
        alert("Please enter your full name.");
        return false;
    }
    if (!phone) {
        alert("Please enter your phone number.");
        return false;
    }
    if (!validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }
    if (!email) {
        alert("Please enter your email.");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (!password) {
        alert("Please enter your password.");
        return false;
    }
    if (!gender) {
        alert("Please select your gender.");
        return false;
    }
    if (!age || age < 1 || age > 120) {
        alert("Please enter a valid age.");
        return false;
    }
    
    // Assuming successful validation
    alert("Sign-up successful!");
    return true;
}

// Event listeners for the buttons
document.getElementById("login-btn").addEventListener("click", function() {
    validateLogin();
});

document.getElementById("signup-btn").addEventListener("click", function() {
    validateSignup();
});

// Navigation to Sign-Up Page
document.getElementById("signup-link").addEventListener("click", function() {
    document.getElementById("reg-log").checked = true; // Show Sign-Up Form
});