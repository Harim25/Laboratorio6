// Obtener la URL actual y extraer solo el nombre del archivo
var currentUrl = window.location.pathname.split("/").pop();

// Obtener todos los enlaces del navbar
var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Recorrer los enlaces y comparar solo el nombre del archivo con la URL actual
navLinks.forEach(function(link) {
    // Extraer solo el nombre del archivo del href del enlace
    var linkUrl = link.getAttribute('href').split("/").pop();
    
    // Comparar el nombre del archivo con el de la URL actual
    if (linkUrl === currentUrl || (currentUrl === "" && linkUrl === "index.html")) {
        link.classList.add('active');  // Añadir clase 'active' al enlace correspondiente
    }
});