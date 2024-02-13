document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const mobileLinks = document.querySelector(".mobile-links");

    menuIcon.addEventListener("click", function () {
        mobileLinks.style.display = (mobileLinks.style.display === "block") ? "none" : "block";
    });

    // Ocultar enlaces móviles al hacer clic en cualquier parte fuera de ellos
    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !mobileLinks.contains(event.target)) {
            mobileLinks.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Muestra el contenido principal una vez que la página se haya cargado
    document.querySelector('.loader-wrapper').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
  });