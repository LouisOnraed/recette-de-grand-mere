document.addEventListener('DOMContentLoaded', function () {
    const themeButton = document.getElementById('theme-button'); // Récupère le bouton de changement de thème
    const body = document.body; // Récupère l'élément body
    const iconTheme = document.getElementById('icon-theme'); // Récupère l'élément icon-theme

    // Fonction pour obtenir un cookie par son nom
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Fonction pour définir un cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Définit la date d'expiration du cookie
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/`; // Définit le cookie avec son nom, valeur et date d'expiration
    }

    // Charge le thème sauvegardé depuis le cookie
    const savedTheme = getCookie('theme');
    if (savedTheme) {
        if (savedTheme === 'dark') {
            body.style.setProperty('--color-1', '#1e1e1e'); // Définit la couleur de fond pour le thème sombre
            body.style.setProperty('--color-2', '#303030'); // Définit la couleur de fond du footer pour le thème sombre
            body.style.setProperty('--color-text', '#fafafa'); // Définit la couleur du texte pour le thème sombre
            iconTheme.src = '../src/img/dark.png'; // Change l'icône du bouton de changement de thème
        } else {
            body.style.setProperty('--color-1', '#fafafa'); // Définit la couleur de fond pour le thème clair
            body.style.setProperty('--color-2', '#e9e9e9'); // Définit la couleur de fond du footer pour le thème clair
            body.style.setProperty('--color-text', '#000000'); // Définit la couleur du texte pour le thème clair
            iconTheme.src = '../src/img/light.png'; // Change l'icône du bouton de changement de thème
        }
    }

    // Ajoute un écouteur d'événement pour le bouton de changement de thème
    themeButton.addEventListener('click', function () {
        const currentColor1 = getComputedStyle(body).getPropertyValue('--color-1').trim(); // Récupère la couleur de fond actuelle

        if (currentColor1 === '#1e1e1e') {
            body.style.setProperty('--color-1', '#fafafa'); // Change la couleur de fond pour le thème clair
            body.style.setProperty('--color-2', '#e9e9e9'); // Change la couleur de fond du footer pour le thème clair
            body.style.setProperty('--color-text', '#000000'); // Change la couleur du texte pour le thème clair
            iconTheme.src = '../src/img/light.png'; // Change l'icône du bouton de changement de thème
            setCookie('theme', 'light', 30); // Sauvegarde le thème comme clair
            console.logt('theme-l');
        } else {
            body.style.setProperty('--color-1', '#1e1e1e'); // Change la couleur de fond pour le thème sombre
            body.style.setProperty('--color-2', '#303030'); // Change la couleur de fond du footer pour le thème sombre
            body.style.setProperty('--color-text', '#fafafa'); // Change la couleur du texte pour le thème sombre
            iconTheme.src = '../src/img/dark.png'; // Change l'icône du bouton de changement de thème
            setCookie('theme', 'dark', 30); // Sauvegarde le thème comme sombre
            console.logt('theme-d');
        }
    });
});