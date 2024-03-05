document.addEventListener("DOMContentLoaded", function() {
    var toggles = document.querySelectorAll('.toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const parent = toggle.parentNode; // Obtener el contenedor padre del botón toggle
            const siblings = Array.from(parent.parentNode.children); // Obtener todos los elementos hermanos del contenedor padre
            const answerIndex = siblings.indexOf(parent) + 1; // Obtener el índice del siguiente elemento después del contenedor padre
            const answer = siblings[answerIndex]; // Obtener el elemento siguiente
            if (answer.classList.contains('answer')) { // Verificar si es la respuesta
                answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});