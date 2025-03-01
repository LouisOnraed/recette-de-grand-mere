document.addEventListener('DOMContentLoaded', function() {
    const recettes = document.querySelectorAll('.recette');
    const hoverSound = document.getElementById('hoverRecette');

    recettes.forEach(recette => {
        recette.addEventListener('mouseenter', function() {
            hoverSound.playbackRate = 1.5; // Augmente la vitesse de lecture du son
            hoverSound.volume = 0.3; // Diminue le volume
            hoverSound.play();
        });

        recette.addEventListener('mouseleave', function() {
            hoverSound.pause();
            hoverSound.currentTime = 0; // Réinitialise le son au début
        });
    });
});