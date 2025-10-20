// Responsive Navigation Menu
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');
menuToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav on link click
navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navList.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', false);
        }
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
            // Update active class
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Fade-in Animation on Scroll
function fadeInOnScroll() {
    document.querySelectorAll('.fade-in').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('DOMContentLoaded', fadeInOnScroll);

// Contact Form Validation & Submission
const contactForm = document.getElementById('contact-form');
const formResult = document.getElementById('form-result');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formResult.textContent = '';
    let valid = true;

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    // Simple validation
    if (name.length < 2) {
        valid = false;
        formResult.textContent = 'Please enter your name.';
        formResult.style.color = 'red';
        contactForm.name.focus();
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        valid = false;
        formResult.textContent = 'Please enter a valid email.';
        formResult.style.color = 'red';
        contactForm.email.focus();
        return;
    }
    if (message.length < 10) {
        valid = false;
        formResult.textContent = 'Please enter a message (at least 10 characters).';
        formResult.style.color = 'red';
        contactForm.message.focus();
        return;
    }

    // Simulate AJAX submission
    formResult.textContent = 'Sending...';
    formResult.style.color = '#21243d';

    setTimeout(() => {
        formResult.textContent = 'Thank you for contacting us! We will get back to you soon.';
        formResult.style.color = 'green';
        contactForm.reset();
    }, 1400);
});