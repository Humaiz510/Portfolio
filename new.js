// Toggle answer display when question is clicked and change background color
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');

    questionBtn.addEventListener('click', () => {
        item.classList.toggle('active');

        if (item.classList.contains('active')) {
            questionBtn.style.backgroundColor = '#ff9800';  // Orange color when expanded
        } else {
            questionBtn.style.backgroundColor = '#ffc107';  // Reset to yellow when collapsed
        }
    });
});