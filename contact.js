
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const responseMsg = document.getElementById("response-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_15eekr5", "template_wbnpmsf", this)
      .then(function () {
        responseMsg.innerText = "Message sent successfully!";
        responseMsg.style.color = "lime";
        form.reset();
      }, function (error) {
        responseMsg.innerText = "Failed to send message. Please try again.";
        responseMsg.style.color = "red";
      });
  });
});
