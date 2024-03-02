document.addEventListener('DOMContentLoaded', function (event) {
        event.preventDefault(); 

        var name = document.getElementById('name').value.trim();  
        var description = document.getElementById('description').value.trim();
        var price = document.getElementById('price').value.trim();
        var discount = document.getElementById('discount').value.trim();
        var sizes = document.querySelectorAll('input[name="sizes"]:checked').length;
        var colors = document.querySelectorAll('input[name="colors"]:checked').length;
        var category = document.getElementById('category').value.trim();

        if (name === '') {
            document.getElementById('name-error').innerText = 'El nombre es requerido';
            return;
        } else if (name.length < 5) {
            document.getElementById('name-error').innerText = 'El nombre debe ser más largo';
            return;
        } else {
            document.getElementById('name-error').innerText = '';
        }

        if (description === '') {
            document.getElementById('description-error').innerText = 'La descripción es requerida';
            return;
        } else if (description.length < 20) {
            document.getElementById('description-error').innerText = 'La descripción debe ser más larga';
            return;
        } else {
            document.getElementById('description-error').innerText = '';
        }

        if (price === '') {
            document.getElementById('price-error').innerText = 'El precio del producto es requerido';
            return;
        } else if (isNaN(price)) {
            document.getElementById('price-error').innerText = 'El precio debe ser un número';
            return;
        } else {
            document.getElementById('price-error').innerText = '';
        }

        if (discount === '') {
            document.getElementById('discount-error').innerText = 'El descuento es requerido';
            return;
        } else if (isNaN(discount)) {
            document.getElementById('discount-error').innerText = 'El descuento debe ser un número';
            return;
        } else {
            document.getElementById('discount-error').innerText = '';
        }

        if (sizes === 0) {
            document.getElementById('sizes-error').innerText = 'Debes seleccionar al menos un tamaño';
            return;
        } else {
            document.getElementById('sizes-error').innerText = '';
        }

        if (colors === 0) {
            document.getElementById('colors-error').innerText = 'Debes seleccionar al menos un color';
            return;
        } else {
            document.getElementById('colors-error').innerText = '';
        }

        if (category === '') {
            document.getElementById('category-error').innerText = 'Debes seleccionar una categoría';
            return;
        } else {
            document.getElementById('category-error').innerText = '';
        }

        this.submit();
    });
;