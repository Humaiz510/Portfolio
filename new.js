// Toggle answer display when question is clicked and change background color
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');

    questionBtn.addEventListener('click', () => {
        item.classList.toggle('active');

        if (item.classList.contains('active')) {
            questionBtn.style.backgroundColor = '#ff9800';  // Orange color when clicked
        } else {
            if (questionBtn.classList.contains('red-btn')) {
                questionBtn.style.backgroundColor = '#f44336';  // Reset to red
            } else if (questionBtn.classList.contains('yellow-btn')) {
                questionBtn.style.backgroundColor = '#ffc107';  // Reset to yellow
            }
        }
    });
});