// Selecteer formulier en bevestigingselement
const form = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmation");

// Formulier submit event
form.addEventListener("submit", async function(e) {
    e.preventDefault(); // voorkom page refresh

    const button = form.querySelector("button");
    button.textContent = "Verzenden...";
    button.disabled = true;

    const data = new FormData(form);

    try {
        // Verstuur data naar Formspree
        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            // Bevestiging tonen met fade-in
            confirmation.style.display = "block";
            confirmation.style.opacity = "0";
            setTimeout(() => {
                confirmation.style.opacity = "1";
            }, 50);

            // Formulier resetten
            form.reset();

            // Fade-out na 5 seconden
            setTimeout(() => {
                confirmation.style.opacity = "0";
                setTimeout(() => {
                    confirmation.style.display = "none";
                }, 600); // match CSS transition duration
            }, 5000);
        } else {
            alert("Er ging iets mis bij het verzenden. Probeer het later opnieuw.");
        }
    } catch (error) {
        alert("Er ging iets mis bij het verzenden. Probeer het later opnieuw.");
        console.error(error);
    }

    // Knop terugzetten
    button.textContent = "Verstuur bericht";
    button.disabled = false;
});
