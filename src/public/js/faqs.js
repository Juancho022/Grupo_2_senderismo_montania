document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll('.question-sub');

    questions.forEach(question => {
        const toggle = question.querySelector('.toggle');
        const answer = question.nextElementSibling;

        question.addEventListener('click', () => {
            if (answer.classList.contains('answer')) {
                if (answer.style.display === 'none') {
                    answer.style.display = 'block';
                    toggle.textContent = '-';
                } else {
                    answer.style.display = 'none';
                    toggle.textContent = '+';
                }
            }
        });
    });
});