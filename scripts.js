/*partie header*/
document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menu-icon');
    var mainNav = document.getElementById('main-nav');



    // Ajoutez un gestionnaire d'événements au redimensionnement de la fenêtre
    window.addEventListener('resize', function () {
        if(window.innerWidth <= 1020) {
            menuIcon.style.display = "inline-block"; // Affiche l'icône pour les écrans plus petits que 1020px
            mainNav.style.display = "none"; // Masque la navigation principale pour les écrans plus petits que 1020px
        } else {
            menuIcon.style.display = "none"; // Masque l'icône pour les écrans plus grands que 1020px
            mainNav.style.display = "block"; // Affiche la navigation principale pour les écrans plus grands que 1020px
        }
    });

    // Ajoutez un gestionnaire d'événements au clic sur l'icône du menu
    menuIcon.addEventListener('click', function () {
        if (mainNav.style.display === "block") {
            mainNav.style.display = "none"; // Masque la navigation principale si elle est visible
        } else {
            mainNav.style.display = "block"; // Affiche la navigation principale si elle est cachée
        }
    });
});
/*partie header*/


/*Partie citations*/
    //cette partie correspond au carrousel des citations.
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
    });
/*Partie citations*/

/*Partie acceptation des cookies*/
document.addEventListener("DOMContentLoaded", function() {
    // Récupération de la bannière de cookies
    var cookieBanner = document.querySelector('.cookie-banner');
    // Récupération du bouton d'acceptation des cookies
    var acceptCookiesButton = document.getElementById('accept-cookies');

    // Vérifier si le bouton d'acceptation des cookies existe et a été cliqué précédemment
    if (acceptCookiesButton) {
        // Si le bouton a été cliqué précédemment, masquer la bannière des cookies
        if (localStorage.getItem('cookiesAccepted')) {
            cookieBanner.style.display = 'none';
        } else {
            // Si le bouton n'a pas été cliqué précédemment, afficher la bannière des cookies
            cookieBanner.style.display = 'block';
        }

        // Ajouter un écouteur d'événements pour le clic sur le bouton d'acceptation des cookies
        acceptCookiesButton.addEventListener('click', function() {
            // Masquer la bannière des cookies
            cookieBanner.style.display = 'none';
            // Enregistrer dans le stockage local que les cookies ont été acceptés
            localStorage.setItem('cookiesAccepted', true);
        });
    }
});
/*Partie acceptation des cookies*/


