// Mostrar invitación al hacer click en la carta
document.addEventListener('DOMContentLoaded', function() {
    var envelope = document.getElementById('envelope-view');
    if (envelope) {
        envelope.addEventListener('click', function() {
            envelope.style.display = 'none';
            var mainInvitation = document.getElementById('main-invitation');
            if (mainInvitation) {
                mainInvitation.style.display = '';
            }
        });
    }
});

// Control de música
function toggleMusic() {
    var audio = document.getElementById('backgroundMusic');
    var button = document.getElementById('musicButton');
    var icon = document.getElementById('musicIcon');
    
    if (audio.paused) {
        audio.play();
        button.classList.remove('paused');
        icon.className = 'fas fa-music';
    } else {
        audio.pause();
        button.classList.add('paused');
        icon.className = 'fas fa-pause';
    }
}

// Inicializar música en pausa
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundMusic');
    var button = document.getElementById('musicButton');
    
    if (audio && button) {
        audio.volume = 0.3; // Volumen al 30%
        button.classList.add('paused');
    }
});

// Cuenta regresiva hasta el 20 de diciembre de 2025, 10:00 AM
function updateCountdown() {
    const targetDate = new Date('2025-12-20T10:00:00');
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('countdownDisplay').innerHTML = '<div>¡Llegó el gran día!</div>';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('countdownDisplay').innerHTML = `
        <div class="count-item">
            <div class="simple-count-circle"><span id="days">${days}</span></div>
            <label>días</label>
        </div>
        <div class="count-item">
            <div class="simple-count-circle"><span id="hours">${hours}</span></div>
            <label>horas</label>
        </div>
        <div class="count-item">
            <div class="simple-count-circle"><span id="minutes">${minutes}</span></div>
            <label>minutos</label>
        </div>
        <div class="count-item">
            <div class="simple-count-circle"><span id="seconds">${seconds}</span></div>
            <label>segundos</label>
        </div>
    `;
}

setInterval(updateCountdown, 1000);
updateCountdown();

function confirmarAsistencia() {
    // Reemplaza el número y el mensaje por el que desees
    var telefono = '595986489347'; // Ejemplo: 595981234567
    var mensaje = encodeURIComponent('¡Hola! Quiero confirmar mi asistencia a la boda de Mirian & Koky.');
    var url = `https://wa.me/${telefono}?text=${mensaje}`;
    window.open(url, '_blank');
}

function verUbicacion() {
    // URL corregida para Quinta Don Aniceto en Caacupé, Paraguay
    var url = 'https://maps.google.com/maps?q=Quinta+Don+Aniceto,+Caacupé,+Paraguay&hl=es&gl=py';
    window.open(url, '_blank');
}
