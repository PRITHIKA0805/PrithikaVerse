const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

/* Reusable helpers */
function showError(input, message) {
    const error = input.nextElementSibling;
    error.textContent = message;
    input.classList.add("error-border");
    input.classList.remove("success-border");
}

function showSuccess(input) {
    const error = input.nextElementSibling;
    error.textContent = "";
    input.classList.add("success-border");
    input.classList.remove("error-border");
}

/* Individual validators */
function validateName() {
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
        return false;
    }
    showSuccess(nameInput);
    return true;
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, "Enter a valid email address");
        return false;
    }
    showSuccess(emailInput);
    return true;
}

function validatePassword() {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordPattern.test(passwordInput.value)) {
        showError(passwordInput, "Password must be 6+ chars, include 1 number & 1 uppercase");
        return false;
    }
    showSuccess(passwordInput);
    return true;
}

function validateConfirmPassword() {
    if (confirmPasswordInput.value !== passwordInput.value || confirmPasswordInput.value === "") {
        showError(confirmPasswordInput, "Passwords do not match");
        return false;
    }
    showSuccess(confirmPasswordInput);
    return true;
}

/* Real-time validation */
nameInput.addEventListener("keyup", validateName);
emailInput.addEventListener("keyup", validateEmail);
passwordInput.addEventListener("keyup", validatePassword);
confirmPasswordInput.addEventListener("keyup", validateConfirmPassword);

/* Prevent submit until valid */
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isValid =
        validateName() &
        validateEmail() &
        validatePassword() &
        validateConfirmPassword();

    if (isValid) {
        alert("Registration Successful 🎉");
        form.reset();
        document.querySelectorAll("input").forEach(input =>
            input.classList.remove("success-border")
        );
    }
});
