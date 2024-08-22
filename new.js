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

// Search FAQ function
function searchFAQ() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionText = item.querySelector('.faq-question').textContent.toLowerCase();
        const answerText = item.querySelector('.faq-answer').textContent.toLowerCase();
        
        // Check if the question or the answer contains the search input
        if (questionText.includes(input) || answerText.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}