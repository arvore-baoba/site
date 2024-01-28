document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, 
                behavior: 'smooth'
            });
        }
    });
});