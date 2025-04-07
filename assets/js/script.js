// Smooth scrolling with improved effect between sections
function navigateTo(section) {
    document.getElementById(section).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    // Optional: Add a highlight effect to the target section
    const target = document.getElementById(section);
    target.style.transition = 'box-shadow 0.5s ease-in-out';
    target.style.boxShadow = '0 0 30px #607d99';

    setTimeout(() => {
        target.style.boxShadow = 'none';
    }, 1000);
}

// Form submission (optional example functionality)
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Thank you, ${name}! We will contact you shortly at ${email}.`);
});


// Detecta el scroll
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
        
    if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
    } else {
            navbar.classList.remove('scrolled');
    }
});





