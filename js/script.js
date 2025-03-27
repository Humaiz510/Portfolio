document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Get the href attribute
            const targetId = this.getAttribute('href');
            
            // Check if the link points to another page
            if (targetId.includes('index.html#')) {
                // Let the browser handle navigation to another page
                return true;
            } else if (targetId.startsWith('#')) {
                // This is a link to a section on the current page
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Active navigation highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            // Only highlight links to sections on the current page
            if (href.startsWith('#') && href.substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Add event listeners to navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            console.log(`${this.textContent} clicked`);
            // Uncomment the next line if you want to navigate manually
            // window.location.href = this.href; 
        });
    });
}); 