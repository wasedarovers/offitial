const questions = document.querySelectorAll('.quest');
const answers = document.querySelectorAll('.answer');
const q = document.querySelectorAll('.q');
questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        const isCurrentlyShown = answers[index].classList.contains('show');

        answers.forEach(answer => answer.classList.remove('show'));
        q.forEach(q => q.classList.remove('active')); 

        if (!isCurrentlyShown) {
            answers[index].classList.add('show');
            q[index].classList.add('active');
        }
    });
});



window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.hero');
    title.classList.add('floating-text');
  });



