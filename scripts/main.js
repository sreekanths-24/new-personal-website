document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();let t=this.getAttribute("href"),n=document.querySelector(t);n&&n.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest",timingFunction:"cubic-bezier(0.42, 0, 0.58, 1)"})})});var typed=new Typed(".typing",{strings:["am Sreekanth S.","am a Full Stack Web Developer.","am a Software Engineer.","am a Tech Enthusiast.","love learning new technologies.",],smartBackspace:!0,typeSpeed:60,backSpeed:20,backDelay:2e3,loop:!0,showCursor:!0,cursorChar:"_"});function myFunction(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;document.getElementById("myBar").style.width=e/t*100+"%"}window.onscroll=function(){myFunction(),scrollFunction()};let mybutton=document.getElementById("myBtn");function scrollFunction(){document.body.scrollTop>20||document.documentElement.scrollTop>20?mybutton.style.display="block":mybutton.style.display="none"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}const observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")})}),hiddenElements=document.querySelectorAll(".hidden");hiddenElements.forEach(e=>observer.observe(e));