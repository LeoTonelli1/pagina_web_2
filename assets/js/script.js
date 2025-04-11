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

// Detect scroll
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
        
    if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
    } else {
            navbar.classList.remove('scrolled');
    }
});

// Function to validate passwords
function validatePasswords(password1, password2) {
    if (password1 !== password2) {
        alert('Passwords do not match. Please try again.');
        return false;
    }
    return true;
}

// Registration form validation
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            const password1 = document.getElementById('password')?.value;
            const password2 = document.getElementById('confirmPassword')?.value;
            
            if (password1 && password2) {
                if (!validatePasswords(password1, password2)) {
                    event.preventDefault();
                    return false;
                }
            }
            return true;
        });
    }
});





