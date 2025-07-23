const request = require('supertest');
const app = require('../src/app');

let createdUserId;

describe('User API', () => {

  it('should return all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'Test User',
        email: 'testuser@example.com',
        age: 30
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Test User');
    createdUserId = res.body.id; // Save for next tests
  });

  it('should return a user by ID', async () => {
    const res = await request(app).get(`/users/${createdUserId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', createdUserId);
  });

  it('should update a user by ID', async () => {
    const res = await request(app)
      .put(`/users/${createdUserId}`)
      .send({
        name: 'Updated User',
        email: 'updated@example.com',
        age: 31
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name', 'Updated User');
  });

  it('should delete a user by ID', async () => {
    const res = await request(app).delete(`/users/${createdUserId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'User deleted successfully');
  });

});
