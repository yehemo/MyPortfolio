const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-link.active')?.classList.remove('active');
        this.classList.add('active');
    });
});


