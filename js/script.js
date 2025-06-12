// Navbar toggle (mobile)
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
const menuLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu on link click (mobile)
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Highlight active menu on scroll
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 80;
    menuLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Smooth scroll for nav-link (for older browsers)
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Banner Auto Slide
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const nextBtn = document.querySelector('.slider-arrow.right');
const prevBtn = document.querySelector('.slider-arrow.left');

function showSlide(idx) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
    });
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}
function prevSlideFunc() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}
if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlideFunc);
    setInterval(nextSlide, 4000); // Auto slide every 4 seconds
}

// Form submission & preview
const form = document.getElementById('contact-form');
const previewName = document.getElementById('preview-name');
const previewEmail = document.getElementById('preview-email');
const previewMessage = document.getElementById('preview-message');
const currentTimeElement = document.getElementById('current-time');

// Update preview saat form diisi
form.addEventListener('input', () => {
    previewName.textContent = form.name.value;
    previewEmail.textContent = form.email.value;
    previewMessage.textContent = form.message.value;
    updateCurrentTime();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Pesan berhasil dikirim!');
    form.reset();
    previewName.textContent = '';
    previewEmail.textContent = '';
    previewMessage.textContent = '';
    updateCurrentTime();
});

// Update current time every minute
function updateCurrentTime() {
    const now = new Date();
    currentTimeElement.textContent = now.toLocaleString('id-ID', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });
}

// Format date for preview
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Initial time update
updateCurrentTime();
setInterval(updateCurrentTime, 60000);

// Tambahkan di bagian bawah file JS Anda

// Helper: Tambahkan class animasi pada section dan elemen penting
document.querySelectorAll('section').forEach(sec => sec.classList.add('animated-section'));
document.querySelectorAll('.visi').forEach(el => el.classList.add('animated-fadeInLeft'));
document.querySelectorAll('.misi').forEach(el => el.classList.add('animated-fadeInRight'));
document.querySelectorAll('.card').forEach(el => el.classList.add('animated-popIn'));
document.querySelectorAll('.logo').forEach(el => el.classList.add('animated-popIn'));

// Intersection Observer untuk animasi on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(
    '.animated-section, .animated-fadeInLeft, .animated-fadeInRight, .animated-popIn'
).forEach(el => observer.observe(el));