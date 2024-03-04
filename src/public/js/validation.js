document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('#product-form');

    // Función para validar el nombre en tiempo real
    function validateName(input, errors) {
        const nameValue = input.value.trim();
        if (nameValue === '') {
            errors.push('Debes colocar el nombre del producto');
        } else if (nameValue.length < 5) {
            errors.push('El nombre del producto tiene que tener al menos 5 caracteres');
        }
    }

    // Función para validar la descripción en tiempo real
    function validateDescription(input, errors) {
        const descriptionValue = input.value.trim();
        if (descriptionValue === '') {
            errors.push('La descripción es requerida');
        } else if (descriptionValue.length < 20) {
            errors.push('La descripción debe tener al menos 20 caracteres');
        }
    }

    // Función para validar el precio en tiempo real
    function validatePrice(input, errors) {
        const priceValue = input.value.trim();
        if (priceValue === '') {
            errors.push('El precio del producto es requerido');
        } else if (isNaN(priceValue)) {
            errors.push('El precio debe ser un número');
        }
    }

    // Función para validar el descuento en tiempo real
    function validateDiscount(input, errors) {
        const discountValue = input.value.trim();
        if (discountValue === '') {
            errors.push('El descuento es requerido');
        } else if (isNaN(discountValue)) {
            errors.push('El descuento debe ser un número');
        }
    }

    // Función para validar al menos un tamaño seleccionado en tiempo real
    function validateSizes(inputs, errors) {
        if (inputs.length === 0) {
            errors.push('Debes seleccionar al menos un tamaño');
        }
    }

    // Función para validar al menos un color seleccionado en tiempo real
    function validateColors(inputs, errors) {
        if (inputs.length === 0) {
            errors.push('Debes seleccionar al menos un color');
        }
    }

    // Función para mostrar u ocultar mensajes de error
    function updateErrorDisplay(errors) {
        let errorsDiv = document.querySelector('.errors');
        let ulErrors = errorsDiv.querySelector('ul');

        if (errors.length > 0) {
            ulErrors.innerHTML = ''; // Limpiar errores anteriores
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += '<li>' + errors[i] + '</li>';
            }
            errorsDiv.style.display = 'block'; // Mostrar el div de errores
        } else {
            errorsDiv.style.display = 'none'; // Ocultar el div de errores si no hay errores
        }
    }

    form.addEventListener("submit", function (e) {
        let errors = [];

        let nameInput = document.querySelector('#name');
        let descriptionInput = document.querySelector('#description');
        let priceInput = document.querySelector('#price');
        let discountInput = document.querySelector('#discount');
        let sizesInputs = document.querySelectorAll('input[name="sizes"]:checked');
        let colorsInputs = document.querySelectorAll('input[name="colors"]:checked');

        validateName(nameInput, errors);
        validateDescription(descriptionInput, errors);
        validatePrice(priceInput, errors);
        validateDiscount(discountInput, errors);
        validateSizes(sizesInputs, errors);
        validateColors(colorsInputs, errors);

        if (errors.length > 0) {
            e.preventDefault();
            updateErrorDisplay(errors);
        } else {
            alert('Producto creado con éxito!');
        }
    });

    // Agregar eventos de entrada para realizar validaciones en tiempo real
    document.getElementById('name').addEventListener('input', function() {
        let errors = [];
        validateName(this, errors);
        updateErrorDisplay(errors);
    });

    document.getElementById('description').addEventListener('input', function() {
        let errors = [];
        validateDescription(this, errors);
        updateErrorDisplay(errors);
    });

    document.getElementById('price').addEventListener('input', function() {
        let errors = [];
        validatePrice(this, errors);
        updateErrorDisplay(errors);
    });

    document.getElementById('discount').addEventListener('input', function() {
        let errors = [];
        validateDiscount(this, errors);
        updateErrorDisplay(errors);
    });

    document.querySelectorAll('input[name="sizes"]').forEach(input => {
        input.addEventListener('input', function() {
            let errors = [];
            validateSizes(document.querySelectorAll('input[name="sizes"]:checked'), errors);
            updateErrorDisplay(errors);
        });
    });

    document.querySelectorAll('input[name="colors"]').forEach(input => {
        input.addEventListener('input', function() {
            let errors = [];
            validateColors(document.querySelectorAll('input[name="colors"]:checked'), errors);
            updateErrorDisplay(errors);
        });
    });
});