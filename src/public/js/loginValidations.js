window.addEventListener('load', function () {

    let emailInput = document.querySelector('#emailLogin');
    let passwordInput = document.querySelector('#passwordFieldLogin');
    let emailError = document.querySelector('#emailError');
    let passwordError = document.querySelector('#passwordError');

    // Agregar event listener de tipo blur para el campo de email
    emailInput.addEventListener('blur', function (e) {
        // Validar si el campo de email está vacío
        if (emailInput.value === '') {
            emailError.textContent = 'Por favor, completá este campo';
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    });

    // Agregar event listener de tipo blur para el campo de contraseña
    passwordInput.addEventListener('blur', function () {
        // Validar si la contraseña tiene menos de 8 caracteres
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres';
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    });

    document.querySelector('.loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        if (emailInput.value.trim() !== '' && passwordInput.value.length >= 8) {
            alert('Sesión iniciada con éxito');
            document.querySelector('.loginForm').submit(); // Enviar el formulario
        }
    });

});