const { server, handle } = require("../../index");
const { client, Order } = require("../../db");
const supertest = require("supertest");
const request = supertest(server);

describe("/api/order endpoint", () => {
  afterAll(async () => {
    await client.end();
    handle.close();
  });

  describe("GET /order", () => {
    it("should respond with a list of orders on response.body", async () => {
      const response = await request.get("/api/order");
      expect(response.status).toBe(200);

      const { orders } = response.body;
      expect(orders).toBeTruthy();
      expect(orders[0].productId).toBeTruthy();
    });
  });

  describe("POST /order, PATCH /order/:id", () => {
    let createdOrderFromPostAction;

    const postOrder = {
      productId: 5,
      orderId: 5,
      quantity: 8,
      price: 250,
    };

    afterAll(async () => {
      // deleting any data we create in the course of tests
      // makes our test suites idempotent, meaning that they're repeatable! :)
      await Order.deleteOrder(createdOrderFromPostAction.id);
    });

    it("POST /order should respond with the newly created order", async () => {
      const response = await request.post("/api/order").send(postOrder);
      createdOrderFromPostAction = response.body.order;

      expect(response.status).toBe(201);
      expect(createdOrderFromPostAction).toBeTruthy();
      expect(createdOrderFromPostAction.username).toEqual(postOrder.username);
    });

    it("PATCH /order/:id should successfully modify a order field", async () => {
      const response = await request
        .patch(`/api/order/${createdOrderFromPostAction.id}`)
        .send({ productId: "5" });

      createdOrderFromPostAction = response.body.order;

      expect(response.status).toBe(303);
      expect(createdOrderFromPostAction).toBeTruthy();
      expect(createdOrderFromPostAction.productId).toEqual("5");
    });
  });
});
