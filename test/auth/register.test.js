const request = require('supertest');
const app = require('../../app');
const { User } = require('../../app/models');

describe('User', () => {
  let user;
  afterAll(async () => {
    user = await User.destroy({
      where: {
        email: 'tubagus@gmail.com',
      },
    });
  });
  it('Register user', () => {
    return request(app)
      .post('/v1/auth/register')
      .set('Accept', 'application/json')
      .send({
        name: 'tubagus',
        email: 'tubagus@gmail.com',
        password: 'tubagus',
      })
      .then((res) => {
        expect(res.statusCode).toBe(201);
      });
  });
  it('Register user with same email', () => {
    return request(app)
      .post('/v1/auth/register')
      .set('Accept', 'application/json')
      .send({
        name: 'eza',
        email: 'tubagus@gmail.com',
        password: 'eza',
      })
      .expect(422);
  });
});
