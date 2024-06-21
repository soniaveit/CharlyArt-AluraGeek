const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Ruta de ejemplo
app.get('/api', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Manejo de rutas inexistentes
app.use((req, res, next) => {
  res.status(404).send('Página no encontrada');
});

// Exporta la aplicación
module.exports = app;