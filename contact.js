import emailjs from 'emailjs-com';

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID); // Your EmailJS user ID

    emailjs.send( import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
         {
        name: name,
        email: email,
        subject: subject,
        message: message
    }).then(
        function (response) {
            alert("Message sent successfully!");
            console.log(response);
        },
        function (error) {
            alert("Failed to send the message. Please try again.");
            console.log(error);
        }
    );
});
