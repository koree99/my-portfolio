// send email//
function sendMail() {
    document.getElementById("form-details").addEventListener("submit", (e) => {
        e.preventDefault()

    var params = {
        name: document.getElementById("name").value,
        // lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        message: document.getElementById('message').value,
    };

    const serviceID = "service_kyti9b4";
    const templateID = "template_gh1y61s";

    emailjs.send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("name").value = "";
        // document.getElementById("lastname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert('Your message sent successfully');
    })
    .catch((err) => console.log(err));
})
}