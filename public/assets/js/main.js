document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleMenu');
    const menu = document.getElementById('menu');
    const closeButton = menu.querySelector('.close');

    toggleButton.addEventListener('click', function() {
        console.log("haciendo el menu visible");
        menu.classList.toggle('visible');
    });

    closeButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento por defecto del enlace
        menu.classList.remove('visible');
    });
});