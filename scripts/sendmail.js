function sendMail(e){var e={name:document.getElementById("user-name").value,email:document.getElementById("user-email").value,phone:document.getElementById("user-num").value,message:document.getElementById("user-message").value};emailjs.send("service_9mqtvhc","template_7p8jd7l",e).then(function(e){document.getElementById("user-name").value="",document.getElementById("user-email").value="",document.getElementById("user-num").value="",document.getElementById("user-message").value="",console.log("success"),alert("Your message has been send successfully! I will get back to you shortly. Have a nice day!!")}).catch(e=>console.log(e))}function checkMail(){""==document.getElementById("user-name").value||""==document.getElementById("user-email").value||""==document.getElementById("user-message").value?alert("Please fill the form before submitting."):sendMail()}