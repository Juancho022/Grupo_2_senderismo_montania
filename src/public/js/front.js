// Contador
document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a todos los botones de incremento y decremento
    let decreaseButtons = document.querySelectorAll('.button.decrease');
    let increaseButtons = document.querySelectorAll('.button.increase');
    let countElements = document.querySelectorAll('.count');

    // Manejar el evento de decremento para todos los botones
    decreaseButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            let currentCount = parseInt(countElements[index].textContent);
            let newCount = currentCount - 1;
            if (newCount >= 0) {
                countElements[index].textContent = newCount;
            }
        });
    });

    // Manejar el evento de incremento para todos los botones
    increaseButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            let currentCount = parseInt(countElements[index].textContent);
            let newCount = currentCount + 1;
            countElements[index].textContent = newCount;
        });
    });
});

function confirmDelete() {
    return confirm("¿Estás seguro de que deseas eliminar este producto?");
}