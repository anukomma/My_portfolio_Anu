// 🌟 Attractive Contact Form Interaction
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  // Show animated loader
  status.innerHTML = `<span class="loader"></span> Sending...`;
  status.style.color = "#7b61ff";
  
  setTimeout(() => {
    // Success message with icon
    status.innerHTML = "✅ Thanks! Your message has been received.";
    status.style.color = "green";

    // Reset form smoothly
    form.reset();

    // Fade out success after few seconds
    setTimeout(() => {
      status.textContent = "";
    }, 4000);
  }, 1500);
});
