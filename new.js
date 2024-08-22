// Toggle answer display when question is clicked
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Search FAQ function (excludes Off-Channel vs On-Channel section from filtering)
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

    // Reset Off-Channel vs On-Channel section visibility
    const listSection = document.getElementById('listSection');
    const toggleSectionBtn = document.getElementById('toggleSection');

    // If there is input in the search, hide the Off-Channel section
    if (input.trim() !== "") {
        listSection.style.display = 'none';
        toggleSectionBtn.style.display = 'none';
    } else {
        // Show the Off-Channel section and button again when search is cleared
        listSection.style.display = 'none'; // Keep it hidden by default
        toggleSectionBtn.style.display = 'block'; // Show the button
    }
}

// Toggle section visibility when "Off-Channel vs On-Channel Communication Modes" is clicked
document.getElementById('toggleSection').addEventListener('click', function() {
    const listSection = document.getElementById('listSection');
    listSection.style.display = listSection.style.display === 'block' ? 'none' : 'block';
});