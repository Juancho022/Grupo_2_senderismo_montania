//Contador
document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los elementos HTML
    let decreaseButton = document.getElementById('decrease');
    let increaseButton = document.getElementById('increase');
    let countElement = document.getElementById('count');

    // Manejar el evento de decremento
    decreaseButton.addEventListener('click', function () {
        // Obtener el valor actual y restar 1
        let currentCount = parseInt(countElement.textContent);
        let newCount = currentCount - 1;

        // Verificar que el valor no sea menor que 1
        if (newCount >= 1) {
            // Actualizar el elemento con el nuevo valor
            countElement.textContent = newCount;
        }
    });

    // Manejar el evento de incremento
    increaseButton.addEventListener('click', function () {
        // Obtener el valor actual y sumar 1
        let currentCount = parseInt(countElement.textContent);
        let newCount = currentCount + 1;

        // Actualizar el elemento con el nuevo valor
        countElement.textContent = newCount;
    });
});
