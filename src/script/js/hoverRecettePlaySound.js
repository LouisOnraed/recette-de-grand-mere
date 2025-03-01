document.addEventListener('DOMContentLoaded', function() {
    const recettes = document.querySelectorAll('.recette');
    //const hoverSound = document.getElementById('hoverRecette');

    recettes.forEach(recette => {
        recette.addEventListener('mouseenter', function() {
            let hoverSound = new Audio("../src/audio/hover.mp3");
            hoverSound.playbackRate = 1.2; // Augmente la vitesse de lecture du son
            hoverSound.volume = 0.3; // Diminue le volume
            hoverSound.play();
        });
    });
});