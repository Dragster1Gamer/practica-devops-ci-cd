const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola Mundo! Esta es mi app DevOps.');
});

// Solo inicia el servidor si NO estamos en modo test
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`App escuchando en http://localhost:${port}`);
  });
}

module.exports = app;  // Para las pruebas con supertest