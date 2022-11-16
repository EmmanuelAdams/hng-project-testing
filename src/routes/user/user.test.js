const app = require('../../server'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

describe('user tests', () => {
  it('Testing if Jest works', () => {
    expect(1).toBe(1);
  });

  it('Gets the test endpoint', async () => {
    // Sends GET Request to /test endpoint
    const response = await request.get('/user');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('pass!');
  });
});
