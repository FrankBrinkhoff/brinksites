// Toon huidig jaar in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contactformulier melding
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){
    e.preventDefault();
    message.textContent = "Bedankt! Je bericht is succesvol verzonden.";
    message.style.color = "green";
    form.reset();
});
