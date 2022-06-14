const request = require('supertest');
const app = require('../../app');

describe('POST /v1/auth/login', () => {
  it('Login user', () => request(app)
    .post('/v1/auth/login')
    .set('Accept', 'application/json')
    .send({
      email: 'fikri@binar.co.id',
      password: '123456',
    })
    .expect(201));
});
it('Login user which is not registered', () => {
  return request(app)
    .post('/v1/auth/login')
    .set('Accept', 'application/json')
    .send({
      email: 'fikri2@binar.co.id',
      password: '123456',
    })
    .expect(404);
});
