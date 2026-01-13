const form = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const button = form.querySelector("button");
    button.textContent = "Verzenden...";
    button.disabled = true;

    setTimeout(() => {
        confirmation.style.display = "block";
        form.reset();
        button.textContent = "Verstuur bericht";
        button.disabled = false;
    }, 800);
});
