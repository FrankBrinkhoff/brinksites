const form = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", async function(e) {
    e.preventDefault(); // voorkomt dat de pagina refresh

    const button = form.querySelector("button");
    button.textContent = "Verzenden...";
    button.disabled = true;

    // haal alle form gegevens op
    const data = new FormData(form);

    try {
        // stuur naar Formspree
        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            // laat bevestiging zien
            confirmation.style.display = "block";
            confirmation.style.opacity = "1";

            form.reset(); // maak formulier leeg
        } else {
            alert("Er ging iets mis, probeer het later opnieuw.");
        }
    } catch (error) {
        alert("Er ging iets mis, probeer het later opnieuw.");
        console.error(error);
    }

    // reset button
    button.textContent = "Verstuur bericht";
    button.disabled = false;
});

