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
      amount: 2,
      provider: visa,
      status: approved,
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

    it("PATCH /paymentdetails/:id should successfully modify a payment field", async () => {
      const response = await request
        .patch(`/api/paymentdetails/${createdPaymentDetailsFromPostAction.id}`)
        .send({ amount: "2" });

      createdPaymentDetailsFromPostAction = response.body.paymentDetails;

      expect(response.status).toBe(303);
      expect(createdPaymentDetailsFromPostAction).toBeTruthy();
      expect(createdPaymentDetailsFromPostAction.amount).toEqual("2");
    });
  });
});
