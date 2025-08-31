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

// Crear partículas de corazones
function createParticles() {
    const container = document.getElementById('particlesContainer');
    const particleCount = 8; // Aumentado de 6 a 8
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Detectar si es móvil para usar símbolo diferente
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            particle.innerHTML = '•'; // Punto simple en móvil
        } else {
            particle.innerHTML = '♥'; // Corazón en desktop
        }
        
        // Posición aleatoria
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 12 + 's'; // Reducido de 15s a 12s
        particle.style.animationDuration = (Math.random() * 4 + 7) + 's'; // Reducido de 5+8 a 4+7
        
        container.appendChild(particle);
    }
}

// Inicializar partículas
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    // Regenerar partículas cuando cambie el tamaño de pantalla
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const container = document.getElementById('particlesContainer');
            container.innerHTML = ''; // Limpiar partículas existentes
            createParticles(); // Crear nuevas con el tamaño correcto
        }, 250);
    });
});

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

function verUbicacion2() {
    // Parroquia nuestra señora de los milagros de caccupe
    var url = 'https://maps.app.goo.gl/x7FtjcogcRZd6TnZA';
    window.open(url, '_blank');
}
