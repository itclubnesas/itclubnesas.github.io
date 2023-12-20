const body = document.querySelector("body"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

document.addEventListener('DOMContentLoaded', function() {
    var navItems = document.querySelectorAll('nav li');
  
    navItems.forEach(function(item) {
      item.addEventListener('click', function() {
        var relValue = this.getAttribute('data-rel');
        var sections = document.querySelectorAll('section');
  
        this.classList.add('active');
  
        navItems.forEach(function(navItem) {
          if (navItem !== item) {
            navItem.classList.remove('active');
          }
        });
  
        sections.forEach(function(section) {
          if (section.getAttribute('data-rel') === relValue) {
            fadeIn(section);
          } else {
            fadeOut(section);
          }
        });
      });
    });
  });
  
  function fadeIn(element) {
    element.style.display = 'block';
    element.style.opacity = 0;
  
    var fadeEffect = setInterval(function() {
      if (element.style.opacity < 1) {
        element.style.opacity = parseFloat(element.style.opacity) + 0.1;
      } else {
        clearInterval(fadeEffect);
      }
    }, 20);
  }
  
  function fadeOut(element) {
    element.style.opacity = 1;
  
    var fadeEffect = setInterval(function() {
      if (element.style.opacity > 0) {
        element.style.opacity = parseFloat(element.style.opacity) - 0.1;
      } else {
        element.style.display = 'none';
        clearInterval(fadeEffect);
      }
    }, 20);
  }

//Fungsi mengirim pesan
function send() {
  Email.send({
    SecureToken : "f30c75e7-8644-442e-91d3-b83d4c311057",
    To : 'daffahmadibrahim@gmail.com',
    From : 'daffabot@programer.net',
    Subject : "New Contact Form Enquiry",
    Body : "Name: " + document.getElementById("name").value
       + "<br> Email: " + document.getElementById("email").value
       + "<br> Message: " + document.getElementById("message").value
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