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
        const question = item.querySelector('.faq-question').textContent.toLowerCase();
        if (question.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// Toggle section visibility when "Off-Channel vs On-Channel Communication Modes" is clicked
document.getElementById('toggleSection').addEventListener('click', function() {
    const listSection = document.getElementById('listSection');
    listSection.style.display = listSection.style.display === 'block' ? 'none' : 'block';
});