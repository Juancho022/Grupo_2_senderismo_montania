window.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('form');

    let nameInput = document.querySelector('#firstName');
    let lastNameInput = document.querySelector('#lastName');
    let emailInput = document.querySelector('#emailRegister');
    let passwordInput = document.querySelector('#passwordFieldRegister');
    let confirmPasswordInput = document.querySelector('#confirmPasswordField');

    let nameError = document.querySelector('#nameError');
    let lastNameError = document.querySelector('#lastNameError');
    let emailError = document.querySelector('#emailError');
    let passwordError = document.querySelector('#passwordError');
    let confirmPasswordError = document.querySelector('#confirmPasswordError');

    nameInput.addEventListener('input', function () {
        validateName();
    });

    lastNameInput.addEventListener('input', function () {
        validateLastName();
    });

    emailInput.addEventListener('input', function () {
        validateEmail();
    });

    passwordInput.addEventListener('input', function () {
        validatePassword();
    });

    confirmPasswordInput.addEventListener('input', function () {
        validateConfirmPassword();
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        validateName();
        validateLastName();
        validateEmail();
        validatePassword();
        validateConfirmPassword();

        // Verificar si todas las validaciones son exitosas
        if (!nameError.textContent && !lastNameError.textContent && !emailError.textContent && !passwordError.textContent && !confirmPasswordError.textContent) {
            alert('Usuario registrado con éxito. Inicia sesión para continuar.');
            form.submit(); 
        }
    });

    // Función para validar el nombre en tiempo real
    function validateName() {
        if (nameInput.value.trim().length < 3) {
            nameError.textContent = 'El nombre debe tener más de 2 caracteres!';
            nameError.style.display = 'block';
        } else {
            nameError.textContent = '';
            nameError.style.display = 'none';
        }
    }

    // Función para validar el apellido en tiempo real
    function validateLastName() {
        if (lastNameInput.value.trim().length < 3) {
            lastNameError.textContent = 'El apellido debe tener más de 2 caracteres!';
            lastNameError.style.display = 'block';
        } else {
            lastNameError.textContent = '';
            lastNameError.style.display = 'none';
        }
    }

    // Función para validar el correo electrónico en tiempo real
    function validateEmail() {
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Por favor, completa este campo!';
            emailError.style.display = 'block';
        } else {
            emailError.textContent = '';
            emailError.style.display = 'none';
        }
    }

    // Función para validar la contraseña en tiempo real
    function validatePassword() {
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres!';
            passwordError.style.display = 'block';
        } else {
            passwordError.textContent = '';
            passwordError.style.display = 'none';
        }
    }

    // Función para validar la confirmación de contraseña en tiempo real
    function validateConfirmPassword() {
        if (confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordError.textContent = 'Las contraseñas no coinciden!';
            confirmPasswordError.style.display = 'block';
        } else {
            confirmPasswordError.textContent = '';
            confirmPasswordError.style.display = 'none';
        }
    }
});