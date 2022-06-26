function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-theme");
}

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text', { delay: 200, origin: 'top' })
sr.reveal('.home-img', { delay: 400, origin: 'top' })
sr.reveal('.about, .education, .portfolio, .cta, .blog, .contact, .copyright', { delay: 200, origin: 'top' })