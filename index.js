
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.custom-navbar');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
