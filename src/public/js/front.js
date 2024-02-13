//Contador
document.addEventListener('DOMContentLoaded', function () {
    
    let decreaseButtons = document.querySelectorAll('.counter #decrease');
    let increaseButtons = document.querySelectorAll('.counter #increase');
    let countElements = document.querySelectorAll('.counter #count');

    decreaseButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            let currentCount = parseInt(countElements[index].textContent);
            let newCount = currentCount - 1;
            if (newCount >= 0) {
                countElements[index].textContent = newCount;
            }
        });
    });

    increaseButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            let currentCount = parseInt(countElements[index].textContent);
            let newCount = currentCount + 1;
            countElements[index].textContent = newCount;
        });
    });
});



// Obtener referencias a los elementos HTML

// Manejar el evento de decremento


// Manejar el evento de incremento