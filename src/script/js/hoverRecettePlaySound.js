document.addEventListener('DOMContentLoaded', function() {
    const recettes = document.querySelectorAll('.recette');
    //const hoverSound = document.getElementById('hoverRecette');

    recettes.forEach(recette => {
        recette.addEventListener('mouseenter', function() {
            let hoverSound = new Audio("https://www.myinstants.com/media/sounds/woosh_s21KzKN.mp3");
            hoverSound.playbackRate = 1.2; // Augmente la vitesse de lecture du son
            hoverSound.volume = 0.3; // Diminue le volume
            hoverSound.play();
        });
    });
});