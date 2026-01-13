const form = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const button = form.querySelector("button");
    button.textContent = "Verzenden...";
    button.disabled = true;

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" }
        });

        if (response.ok) {
            confirmation.textContent = "Bedankt! Je bericht is verzonden naar BrinkSites.";
            confirmation.style.display = "block";
            confirmation.style.opacity = "0";
            setTimeout(() => confirmation.style.opacity = "1", 50);

            form.reset();

            setTimeout(() => {
                confirmation.style.opacity = "0";
                setTimeout(() => confirmation.style.display = "none", 600);
            }, 5000);
        } else {
            alert("Er ging iets mis bij het verzenden. Probeer het later opnieuw.");
        }
    } catch (error) {
        alert("Er ging iets mis bij het verzenden. Probeer het later opnieuw.");
        console.error(error);
    }

    button.textContent = "Verstuur bericht";
    button.disabled = false;
});
