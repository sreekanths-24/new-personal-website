//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Use a cubic-bezier easing function for the animation
      const cubicBezierTiming = "cubic-bezier(0.42, 0, 0.58, 1)";

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        timingFunction: cubicBezierTiming,
      });
    }
  });
});

// var typed = new Typed('.logotype', {
//     strings: [
//         'SREEKANTH S',
//         'WHATS THAT?',
//         'YOU NEED A WEBSITE?',
//         'YOU ARE AT..',
//         '..THE RIGHT PLACE!',
//         'FEEL FREE TO ..',
//         '..CONTACT ME!',
//     ],
//     typeSpeed: 80,
//     backDelay: 2000,
//     showCursor: false,
//     loop: true
//   });
var typed = new Typed(".typing", {
  strings: [
    "am Sreekanth S.",
    "am a Freelancing Web Developer.",
    "am a Full Stack Web Developer.",
    "am a Computer Science Engineer.",
    "am a Tech Enthusiast.",
    "love learning new technologies.",
  ],
  smartBackspace: true,
  typeSpeed: 60,
  backSpeed: 20,
  backDelay: 2000,
  loop: true,
  showCursor: true,
  cursorChar: "_",
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction(), scrollFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
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

// Intersection Observer API for scrolling animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    // else {
    //     entry.target.classList.remove('show');
    // }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

