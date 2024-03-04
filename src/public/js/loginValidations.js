window.addEventListener('load', function () {

    let emailInput = document.querySelector('#emailLogin');
    let passwordInput = document.querySelector('#passwordFieldLogin');
    let emailError = document.querySelector('#emailError');
    let passwordError = document.querySelector('#passwordError');

    // Agregar event listener de tipo blur para el campo de email
    emailInput.addEventListener('blur', function (e) {
        // Validar si el campo de email está vacío
        //console.log('blur1');
        if (emailInput.value === '') {
            emailError.textContent = 'Por favor, completa este campo!';
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    });

    // Agregar event listener de tipo blur para el campo de contraseña
    passwordInput.addEventListener('blur', function () {
        // Validar si la contraseña tiene menos de 8 caracteres
        //console.log('blur2');
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres!';
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    });


})