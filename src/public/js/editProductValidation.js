document.getElementById('product-id').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener valores de los campos
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const discount = document.getElementById('discount').value;
    const sizes = document.querySelectorAll('input[name="sizes"]:checked');
    const colors = document.querySelectorAll('input[name="colors"]:checked');
    const categoryproduct = document.getElementById('categoryproduct').value;

    // Validar los campos
    let isValid = true;

    // Validar nombre
    if (name.length < 5) {
        document.getElementById('err-name').textContent = 'El nombre debe tener al menos 5 caracteres';
        isValid = false;
    } else {
        document.getElementById('err-name').textContent = '';
    }

    // Validar descripción
    if (description.length < 20) {
        document.getElementById('err-description').textContent = 'La descripción debe tener al menos 20 caracteres';
        isValid = false;
    } else {
        document.getElementById('err-description').textContent = '';
    }

    // Validar precio
    if (isNaN(price) || price <= 0) {
        document.getElementById('err-price').textContent = 'El precio debe ser un número mayor que cero';
        isValid = false;
    } else {
        document.getElementById('err-price').textContent = '';
    }

    // Validar descuento
    if (isNaN(discount)) {
        document.getElementById('err-discount').textContent = 'El descuento debe ser un número';
        isValid = false;
    } else {
        document.getElementById('err-discount').textContent = '';
    }

    // Validar al menos un tamaño seleccionado
    const checkedSizes = Array.from(sizes).length > 0;
    if (!checkedSizes) {
        document.getElementById('err-sizes').textContent = 'Seleccione al menos un tamaño';
        isValid = false;
    } else {
        document.getElementById('err-sizes').textContent = '';
    }

    // Validar al menos un color seleccionado
    const checkedColors = Array.from(colors).length > 0;
    if (!checkedColors) {
        document.getElementById('err-colors').textContent = 'Seleccione al menos un color';
        isValid = false;
    } else {
        document.getElementById('err-colors').textContent = '';
    }

    // Si todas las validaciones son exitosas, enviar el formulario
    if (isValid) {
        alert('Producto editado con éxito');
        document.getElementById('product-id').submit();
    }
});

// Agregar eventos input para las validaciones en tiempo real
document.getElementById('name').addEventListener('input', validateName);
document.getElementById('description').addEventListener('input', validateDescription);
document.getElementById('price').addEventListener('input', validatePrice);
document.getElementById('discount').addEventListener('input', validateDiscount);
document.querySelectorAll('input[name="sizes"]').forEach(input => input.addEventListener('input', validateSizes));
document.querySelectorAll('input[name="colors"]').forEach(input => input.addEventListener('input', validateColors));

// Función para validar el nombre en tiempo real
function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('err-name');
    if (nameInput.value.length < 5) {
        nameError.textContent = 'El nombre debe tener al menos 5 caracteres';
        nameError.classList.add('error-active');
    } else {
        nameError.textContent = '';
        nameError.classList.remove('error-active');
    }
}

// Función para validar la descripción en tiempo real
function validateDescription() {
    const descriptionInput = document.getElementById('description');
    const descriptionError = document.getElementById('err-description');
    if (descriptionInput.value.length < 20) {
        descriptionError.textContent = 'La descripción debe tener al menos 20 caracteres';
        descriptionError.classList.add('error-active');
    } else {
        descriptionError.textContent = '';
        descriptionError.classList.remove('error-active');
    }
}

// Función para validar el precio en tiempo real
function validatePrice() {
    const priceInput = document.getElementById('price');
    const priceError = document.getElementById('err-price');
    if (isNaN(priceInput.value) || priceInput.value <= 0) {
        priceError.textContent = 'El precio debe ser un número mayor que cero';
        priceError.classList.add('error-active');
    } else {
        priceError.textContent = '';
        priceError.classList.remove('error-active');
    }
}

// Función para validar el descuento en tiempo real
function validateDiscount() {
    const discountInput = document.getElementById('discount');
    const discountError = document.getElementById('err-discount');
    if (isNaN(discountInput.value)) {
        discountError.textContent = 'El descuento debe ser un número';
        discountError.classList.add('error-active');
    } else {
        discountError.textContent = '';
        discountError.classList.remove('error-active');
    }
}

// Función para validar al menos un tamaño seleccionado en tiempo real
function validateSizes() {
    const sizesInputs = document.querySelectorAll('input[name="sizes"]');
    const sizesError = document.getElementById('err-sizes');
    const checkedSizes = Array.from(sizesInputs).some(input => input.checked);
    if (!checkedSizes) {
        sizesError.textContent = 'Seleccione al menos un tamaño';
        sizesError.classList.add('error-active');
    } else {
        sizesError.textContent = '';
        sizesError.classList.remove('error-active');
    }
}

// Función para validar al menos un color seleccionado en tiempo real
function validateColors() {
    const colorsInputs = document.querySelectorAll('input[name="colors"]');
    const colorsError = document.getElementById('err-colors');
    const checkedColors = Array.from(colorsInputs).some(input => input.checked);
    if (!checkedColors) {
        colorsError.textContent = 'Seleccione al menos un color';
        colorsError.classList.add('error-active');
    } else {
        colorsError.textContent = '';
        colorsError.classList.remove('error-active');
    }
}