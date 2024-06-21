const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Ruta de ejemplo
app.get('/api/db', (req, res) => {
    const dbPath = path.join(__dirname, 'db.json');
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).send('Error leyendo la base de datos');
      } else {
        res.json(JSON.parse(data));
      }
    });
  });

// Manejo de rutas inexistentes
app.use((req, res, next) => {
  res.status(404).send('Página no encontrada');
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
  });
  
// Exporta la aplicación
module.exports = app;