// Voor het contactformulier
const form = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    // Je kan hier later mail API toevoegen
    confirmation.style.display = "block";
    form.reset();
});
