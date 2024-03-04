window.addEventListener('load', function () {

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

    // Agrego event listener para el campo de primer nombre
    nameInput.addEventListener('blur', function (e) {
        // Validar si el campo de name posee mas de 2 caracteres
        //console.log('blur1');
        if (nameInput.value.length < 3) {
            nameError.textContent = 'El nombre debe tener mas de 2 caracteres!';
            nameError.style.display = 'block';
        } else {
            nameError.style.display = 'none';
        }
    });

    //Agrego event listener para el campo del apellido
    lastNameInput.addEventListener('blur', function (e) {
        // Validar si el campo del apellido posee mas de 2 caracteres
        //console.log('blur1');
        if (lastNameInput.value.length < 3) {
            lastNameError.textContent = 'El apellido debe tener mas de 2 caracteres!';
            lastNameError.style.display = 'block';
        } else {
            lastNameError.style.display = 'none';
        }
    });

    //Agrego event listener para el campo del email
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

    //Agrego event listener para el campo de la contraseña
    passwordInput.addEventListener('blur', function (e) {
        // Validar si el campo de email está vacío
        //console.log('blur1');
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres!';
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    });

    confirmPasswordInput.addEventListener('blur', function (e) {
        // Validar si el campo de email está vacío
        //console.log('blur1');
        if (confirmPasswordInput.value.length < 8) {
            confirmPasswordError.textContent = 'La contraseña debe tener al menos 8 caracteres!';
            confirmPasswordError.style.display = 'block';
        } else {
            confirmPasswordError.style.display = 'none';
        }
    });


})