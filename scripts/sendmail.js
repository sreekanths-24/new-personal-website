function sendMail(){
    var params = {
        name : document.getElementById('user-name').value,
        email : document.getElementById('user-email').value,
        number : document.getElementById('user-num').value,
        message : document.getElementById('user-message').value
    }

    const serviceId = 'service_kj4hl5i';
    const templateId = 'template_ovzzpy2';

    emailjs.send(serviceId, templateId, params)
    .then(
        res => {
            document.getElementById('user-name').value = '';
            document.getElementById('user-email').value = '';
            document.getElementById('user-num').value = '';
            document.getElementById('user-message').value = '';
            console.log(res);
            alert("message send successfully, Thank you and have a nice day");
        }
    )
    .catch((err) => console.log(err));
}

function checkMail(){
    if(document.getElementById('user-name').value == '' || document.getElementById('user-email').value == '' || document.getElementById('user-message').value == ''){
        alert("Please fill the form before submitting.");
    } else {
        sendMail()
    }
}