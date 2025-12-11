const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola Mundo! Esta es mi app DevOps.');
});

app.listen(port, () => {
  console.log(`App escuchando en http://localhost:${port}`);
});

module.exports = app;  // Para las pruebas     
// export the app for testing