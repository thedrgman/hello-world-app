const request = require('supertest');
const app = require('./server.js');

describe('GET /', () => {
  it('should return "Hello World, David"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});
