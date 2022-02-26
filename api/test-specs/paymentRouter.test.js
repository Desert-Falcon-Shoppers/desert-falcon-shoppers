const { server, handle } = require("../../index");
const { client, PaymentDetails } = require("../../db");
const supertest = require("supertest");
const request = supertest(server);

describe("/api/users endpoint", () => {
  afterAll(async () => {
    await client.end();
    handle.close();
  });

  describe("GET /paymentdetails", () => {
    it("should respond with a list of payment details on response.body", async () => {
      const response = await request.get("/api/paymentdetails");
      expect(response.status).toBe(200);

      const { PaymentDetails } = response.body;
      expect(PaymentDetails).toBeTruthy();
      expect(users[0].username).toBeTruthy();
    });
  });

  describe("POST /users/paymentdetails, PATCH /paymentdetails/:id", () => {
    let createdPaymentDetailsFromPostAction;

    const postPaymentDetails = {
      id,
      amount,
      provider,
      status,
    };

    afterAll(async () => {
      // deleting any data we create in the course of tests
      // makes our test suites idempotent, meaning that they're repeatable! :)
      await PaymentDetails.deletePaymentDetails(
        createdPaymentDetailsFromPostAction.id
      );
    });

    it("POST /paymentdetails should respond with the newly created payment", async () => {
      const response = await request
        .post("/api/paymentdetails")
        .send(postPaymentDetails);
      createdUserFromPostAction = response.body.id;

      expect(response.status).toBe(201);
      expect(createdPaymentDetailsFromPostAction).toBeTruthy();
      expect(createdPaymentDetailsFromPostAction.amount).toEqual(
        postPaymentDetails.amount
      );
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
