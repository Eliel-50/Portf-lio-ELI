

let typed = new Typed("#text", {
    strings: [
        "Front-End Developer",
        "Web Developer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

ScrollReveal().reveal('.home-content', {
    origin: 'bottom',
    distance: '20px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.sobre', {
    origin: 'left',
    distance: '110px',
    duration: 2000
});

ScrollReveal().reveal('.projects', {
    origin: 'bottom',
    distance: '110px',
    duration: 2000,
    interval: 200
});

ScrollReveal().reveal('.contato', {
    origin: 'bottom',
    distance: '110px',
    duration: 2000,
    interval: 200
});