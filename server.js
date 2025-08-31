const express = require('express');
const path = require('path');
const app = express();

// Puerto que asigna Heroku o 3000 para desarrollo local
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '.')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Manejar todas las rutas no encontradas
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🎉 Invitación de boda ejecutándose en puerto ${PORT}`);
    console.log(`💍 Mirian & Koky - 20 de Diciembre 2025`);
});
