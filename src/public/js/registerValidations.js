window.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Realizar las validaciones
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

        validateName(nameInput, nameError);
        validateLastName(lastNameInput, lastNameError);
        validateEmail(emailInput, emailError);
        validatePassword(passwordInput, passwordError);
        validateConfirmPassword(confirmPasswordInput, passwordInput, confirmPasswordError);

        // Verificar si todas las validaciones son exitosas
        if (!nameError.textContent && !lastNameError.textContent && !emailError.textContent && !passwordError.textContent && !confirmPasswordError.textContent) {
            alert('Usuario registrado con éxito. Inicia sesión para continuar.');
            form.submit(); // Envía el formulario si todas las validaciones son exitosas
        }
    });
});

// Funciones de validación (puedes personalizarlas según tus necesidades)
function validateName(input, errorElement) {
    if (input.value.trim().length < 3) {
        errorElement.textContent = 'El nombre debe tener más de 2 caracteres!';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

function validateLastName(input, errorElement) {
    if (input.value.trim().length < 3) {
        errorElement.textContent = 'El apellido debe tener más de 2 caracteres!';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

function validateEmail(input, errorElement) {
    if (input.value.trim() === '') {
        errorElement.textContent = 'Por favor, completa este campo!';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

function validatePassword(input, errorElement) {
    if (input.value.length < 8) {
        errorElement.textContent = 'La contraseña debe tener al menos 8 caracteres!';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

function validateConfirmPassword(confirmInput, passwordInput, errorElement) {
    if (confirmInput.value !== passwordInput.value) {
        errorElement.textContent = 'Las contraseñas no coinciden!';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}