const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Ajuste para o cabeçalho fixo
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.padding = '15px 0';
    }
});