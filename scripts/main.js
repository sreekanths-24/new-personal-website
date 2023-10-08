//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var typed = new Typed('.logotype', {
    strings: [
        'SREEKANTH S'
    ],
    typeSpeed: 80,
    showCursor: false,
    loop: false
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

  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction() ,scrollFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

 // Get the button:
 let mybutton = document.getElementById("myBtn");

 // When the user scrolls down 20px from the top of the document, show the button
 

 function scrollFunction() {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
 } else {
     mybutton.style.display = "none";
 }
 }

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
 document.body.scrollTop = 0; // For Safari
 document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 }