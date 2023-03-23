// JavaScript om de menu-items te laten werken als knoppen
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        // Voer de actie uit die je wilt uitvoeren als de gebruiker op de link klikt
    });
});