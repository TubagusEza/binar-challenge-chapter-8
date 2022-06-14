const request = require('supertest');
const app = require('../../app');

let accessToken;
beforeAll(async () => {
  const response = await request(app)
    .post('/v1/auth/login')
    .send({
      email: 'johnny@binar.co.id',
      password: '123456',
    });
  accessToken = response.body.accessToken;
});
describe('Create Cars', () => {
  it('Create car', () => {
    return request(app)
      .post('/v1/cars')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        name: 'Honda Avanza',
        price: 12340,
        image: 'honda.jpg',
        size: 'SMALL',
      })
      .expect(201);
  });
});
