// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const body = document.body;

hamburger.addEventListener('click', function() {
    nav.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInside = nav.contains(event.target) || hamburger.contains(event.target);
    if (!isClickInside && nav.classList.contains('active')) {
        nav.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        body.classList.remove('menu-open');
    });
});
