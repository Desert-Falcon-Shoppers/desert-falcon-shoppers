const { server, handle } = require("../../index");
const { client, User } = require("../../db");
const supertest = require("supertest");
const request = supertest(server);

describe("/api/users endpoint", () => {
  afterAll(async () => {
    await client.end();
    handle.close();
  });

  describe("GET /users", () => {
    it("should respond with a list of users on response.body", async () => {
      const response = await request.get("/api/users");
      expect(response.status).toBe(200);

      const { users } = response.body;
      expect(users).toBeTruthy();
      expect(users[0].username).toBeTruthy();
    });
  });

  describe("POST /users/register, PATCH /users/:id", () => {
    let createdUserFromPostAction;

    const postUser = {
      username: "test-user",
      password: "123123123",
      firstName: "test",
      lastName: "user",
      email: "test-user@mail.com",
      phoneNumber: "5551234567",
    };

    afterAll(async () => {
      // deleting any data we create in the course of tests
      // makes our test suites idempotent, meaning that they're repeatable! :)
      await User.deleteUser(createdUserFromPostAction.id);
    });

    it("POST /users/register should respond with the newly created user", async () => {
      const response = await request.post("/api/users/register").send(postUser);
      createdUserFromPostAction = response.body.user;

      expect(response.status).toBe(201);
      expect(createdUserFromPostAction).toBeTruthy();
      expect(createdUserFromPostAction.username).toEqual(postUser.username);
    });

    it("PATCH /users/:id should successfully modify a user field", async () => {
      const response = await request
        .patch(`/api/users/${createdUserFromPostAction.id}`)
        .send({ username: "pizza" });

      createdUserFromPostAction = response.body.user;

      expect(response.status).toBe(303);
      expect(createdUserFromPostAction).toBeTruthy();
      expect(createdUserFromPostAction.username).toEqual("pizza");
    });
  });
});
