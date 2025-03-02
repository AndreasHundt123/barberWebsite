function scrollInto(id) {
    const elmnt = document.getElementById(id);
    elmnt.scrollIntoView({
        behavior: "smooth", 
        block: "start",
        inline: "nearest"
    });
}

function sendMail() {
    let parms = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        content: document.getElementById('content').value
    }
    emailjs.send('service_pr26pyj', 'template_zqb29wf', parms).then(alert('Deine Nachricht wurde versandt!'));
    document.getElementById('contactForm').reset();
}

function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}