const app = require('../../server'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

describe('user tests', () => {
  it('login should be successful', async () => {
    const response = await request.get('/loginRoute');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('login successful');
  });

  it('logout should === success', async () => {
    const response = await request.get('/logoutRoute');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('success');
  });

  it('profile should be successfully deleted', async () => {
    const response = await request.get('/userProfileRoute');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      'you have successfully deleted your account'
    );
  });

  it('status should be 200', async () => {
    const response = await request.get('/userRoute');

    expect(response.statusCode).toBe(200);
  });
});
