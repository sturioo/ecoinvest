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

// Counter animation
function animateCounter(id, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        document.getElementById(id).textContent = value;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Handle scroll event for counter animation
function handleScroll() {
    const achievementsSection = document.querySelector('.achievements');
    if (isElementInViewport(achievementsSection) && !achievementsSection.classList.contains('counted')) {
        achievementsSection.classList.add('counted');
        animateCounter('counter1', 0, 100, 2000);
        animateCounter('counter2', 0, 50, 2000);
        animateCounter('counter3', 0, 75, 2000);
        animateCounter('counter4', 0, 200, 2000);
        // Remove the scroll event listener after counting
        window.removeEventListener('scroll', handleScroll);
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check for counter animation
handleScroll();
