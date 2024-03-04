document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('#product-form');
    form.addEventListener("submit", function (e) {
        let errors = [];

        let nameInput = document.querySelector('#name');
        console.log(nameInput)
        let descriptionInput = document.querySelector('#description');
        let priceInput = document.querySelector('#price');
        let discountInput = document.querySelector('#discount');
        let sizesInputs = document.querySelectorAll('input[name="sizes"]:checked');
        let colorsInputs = document.querySelectorAll('input[name="colors"]:checked');
        // let categoryInput = document.querySelector('#category');


        validateName(nameInput, errors);
        validateDescription(descriptionInput, errors);
        validatePrice(priceInput, errors);
        validateDiscount(discountInput, errors);
        validateSizes(sizesInputs, errors);
        validateColors(colorsInputs, errors);
        // validateCategory(categoryInput, errors);

        let errorsDiv = document.querySelector('.errors');
        let ulErrors = errorsDiv.querySelector('ul');

        if (errors.length > 0) {
            e.preventDefault();
            ulErrors.innerHTML = ''; // Limpiar errores anteriores
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += '<li>' + errors[i] + '</li>';
            }
            errorsDiv.style.display = 'block'; // Mostrar el div de errores
        } else {
            errorsDiv.style.display = 'none'; // Ocultar el div de errores si no hay errores
        }
    });
});

function validateName(input, errors) {
    const nameValue = input.value.trim();
    if (nameValue === '') {
        errors.push('Debes colocar el nombre del producto');
    } else if (nameValue.length < 5) {
        errors.push('El nombre del producto tiene que tener al menos 5 caracteres');
    }
}

function validateDescription(input, errors) {
    const descriptionValue = input.value.trim();
    if (descriptionValue === '') {
        errors.push('La descripción es requerida');
    } else if (descriptionValue.length < 20) {
        errors.push('La descripción debe tener al menos 20 caracteres');
    }
}

function validatePrice(input, errors) {
    const priceValue = input.value.trim();
    if (priceValue === '') {
        errors.push('El precio del producto es requerido');
    } else if (isNaN(priceValue)) {
        errors.push('El precio debe ser un número');
    }
}

function validateDiscount(input, errors) {
    const discountValue = input.value.trim();
    if (discountValue === '') {
        errors.push('El descuento es requerido');
    } else if (isNaN(discountValue)) {
        errors.push('El descuento debe ser un número');
    }
}

function validateSizes(inputs, errors) {
    if (inputs.length === 0) {
        errors.push('Debes seleccionar al menos un tamaño');
    }
}

function validateColors(inputs, errors) {
    if (inputs.length === 0) {
        errors.push('Debes seleccionar al menos un color');
    }
}

// function validateCategory(input, errors) {
//     const categoryValue = input.value.trim();
//     if (categoryValue === '') {
//         errors.push('Debes seleccionar una categoría');
//     } 
// }



