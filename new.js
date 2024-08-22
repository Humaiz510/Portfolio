// Toggle answer display when question is clicked
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Search FAQ function
function searchFAQ() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const questionText = item.querySelector('.faq-question').textContent.toLowerCase();
        const answerText = item.querySelector('.faq-answer').textContent.toLowerCase();
        
        // Check if the question or the answer (including lists) contains the search input
        if (questionText.includes(input) || answerText.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}