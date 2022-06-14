const request = require('supertest');
const app = require('../../app');

describe('User', () => {
  it('Login user', () => request(app)
    .post('/v1/auth/login')
    .set('Accept', 'application/json')
    .send({
      email: 'tubagus@gmail.com',
      password: 'tubagus',
    })
    .expect(201));
});
