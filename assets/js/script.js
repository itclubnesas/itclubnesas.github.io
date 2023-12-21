//Script to preload image header + loading
function preloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = resolve;
    img.onerror = reject;
  });
}

window.onload = () => {
  preloadImage("../img/logo.png")
    .then(() => {
      console.log("Gambar profil berhasil dimuat pertama");
    })
    .catch((error) => {
      console.error("Gagal memuat gambar profil:", error);
    });
};

const body = document.querySelector("body"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

//fungsi dark mode
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

//Fungsi mengirim pesan
function send() {
  setTimeout(() => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }, 200);
  Email.send({
    SecureToken: "bcfb5f26-8616-41c7-9fe2-5c37edf0b2c4",
    To: "daffahmadibrahim@gmail.com",
    From: "daffabot@programmer.net",
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
        alert(message);
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Error Sending Message: " + error);
    });
}
