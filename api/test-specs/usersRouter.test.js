const { server, handle } = require('../../index');
const { client, User } = require('../../db');
const supertest = require('supertest');
const request = supertest(server);

describe('/api/users endpoint', () => {
  afterAll(async () => {
    await client.end();
    handle.close();
  });

  describe('GET /users', () => {
    it('should respond with a list of users on response.body', async () => {
      const response = await request.get('/api/users');
      expect(response.status).toBe(200);

      const { users } = response.body;
      expect(users).toBeTruthy();
      expect(users[0].username).toEqual('devin');
    });
  });

  describe('POST /users/register', () => {
    let createdUserFromPostAction;

    const postUser = {
      username: 'test-user',
      password: '123123123',
      firstName: 'test',
      lastName: 'user',
      email: 'test-user@mail.com',
      phoneNumber: '5551234567',
    };

    afterAll(async () => {
      // deleting any data we create in the course of tests
      // makes our test suites idempotent, meaning that they're repeatable! :)
      await User.deleteUser(createdUserFromPostAction.id);
    });

    it('should respond with the newly created user', async () => {
      const response = await request.post('/api/users/register').send(postUser);

      console.dir(response.body, { depth: null });

      createdUserFromPostAction = response.body.user;

      expect(response.status).toBe(201);
      expect(createdUserFromPostAction).toBeTruthy();
      expect(createdUserFromPostAction.username).toEqual(postUser.username);
    });
  });
});

/* 

  ARRANGE: set the data for the test

  ACT: do something to verify that data

  ASSERT: use test library functions to check that the actions you took on the data did what you expected them to

*/
