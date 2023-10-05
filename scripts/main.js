//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var typed = new Typed('.typing', {
    strings: [
        'am Sreekanth S.', 
        'am a Full Stack Web Developer.', 
        'am a Computer Science Engineer.',
        'am a Tech Enthusiast.',
        'love learning new things.',
        'love to create and build things.'
    ],
    smartBackspace: true,
    typeSpeed: 60,
    backSpeed: 20,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: "_"
  });