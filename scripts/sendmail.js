function sendMail(params) {
    var params = {
        name: document.getElementById("user-name").value,
        email: document.getElementById("user-email").value,
        phone: document.getElementById("user-num").value,
        message: document.getElementById("user-message").value,

    };
    
    const service_id = "service_9mqtvhc";
    const template_id = "template_7p8jd7l";
    
    emailjs
        .send(service_id, template_id, params)
        .then(function(res) {
            document.getElementById("user-name").value = "";
            document.getElementById("user-email").value = "";
            document.getElementById("user-num").value = "";
            document.getElementById("user-message").value = "";
            console.log("success");
    
            alert("Your message has been send successfully! I will get back to you shortly. Have a nice day!!",);
    
        })

        .catch((err) => console.log(err));
    }

    function checkMail(){
        if(document.getElementById('user-name').value == '' || document.getElementById('user-email').value == ''  || document.getElementById('user-message').value == ''){
            alert("Please fill the form before submitting.");
        } else {
            sendMail()
        }
    }