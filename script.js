
// ================================
// MENU MOBILE
// ================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Fermer le menu après avoir cliqué
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ================================
// FILTRE DU MENU
// ================================

const filters = document.querySelectorAll(".filter");
const menuCards = document.querySelectorAll(".menu-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        // Enlever active des autres boutons
        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        // Ajouter active au bouton choisi
        filter.classList.add("active");

        const category = filter.dataset.category;

        menuCards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ================================
// FORMULAIRE RESERVATION
// ================================

const reservationForm =
    document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Merci ! Votre demande de réservation a bien été envoyée."
    );

    reservationForm.reset();

});

