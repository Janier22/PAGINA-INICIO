const bgVideo = document.getElementById('bg-video');

// Función para alternar el mute
function toggleMute() {
    if (bgVideo.muted) {
        bgVideo.muted = false;
        document.querySelector('.mute-button').innerHTML = '🔊'; // Cambia el ícono a sonido
    } else {
        bgVideo.muted = true;
        document.querySelector('.mute-button').innerHTML = '🔇'; // Cambia el ícono a mute
    }
}