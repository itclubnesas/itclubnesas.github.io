const body = document.querySelector("body"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

// dark mode function
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// send message function
function send() {
  Email.send({
    SecureToken: "f30c75e7-8644-442e-91d3-b83d4c311057",
    To: "daffahmadibrahim@gmail.com",
    From: "daffabot@programer.net",
    Subject: "New Contact Form Enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Message: " +
      document.getElementById("message").value,
  })
    .then(function (message) {
      if (message == "OK") {
        alert("Message Succesfully Sent!");
      } else {
        alert("Something wrong i can feel it");
      }
    })
    .catch((error) => {
      alert("Error Sending Message: " + error);
    });
}
