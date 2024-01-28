const historySection = document.querySelector("#historia");
const characteristics = document.querySelector("#caracteristicas");
const culturalImportance = document.querySelector("#importancia");
const about = document.querySelector("#sobre-o-site");
const navLinks = document.querySelectorAll('.nav-link');
const siteLogo = document.querySelector('.site-logo');

document.addEventListener('scroll', function () {
    const header = document.querySelector("header");
    header.classList.toggle('scrolled', window.scrollY > header.offsetHeight);
});

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

    let scrollTop = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 520;
        sectionId = current.getAttribute("id");
        console.log(sectionId);

        if (
            scrollTop > sectionTop &&
            scrollTop <= sectionTop + sectionHeight
        ) {
            document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 120,
                behavior: 'smooth'
            });
        }
    });
});