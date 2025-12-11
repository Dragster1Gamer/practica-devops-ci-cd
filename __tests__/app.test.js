const request = require('supertest');
const app = require('../server');

describe('Pruebas unitarias para Hola Mundo', () => {
  it('Debe retornar "¡Hola Mundo!" en la ruta raíz', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('¡Hola Mundo!');
  });
});