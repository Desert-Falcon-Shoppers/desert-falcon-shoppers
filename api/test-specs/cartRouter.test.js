const { server, handle } = require("../../index");
const { client, Cart } = require("../../db");
const supertest = require("supertest");
const request = supertest(server);

describe("/api/cart endpoint", () => {
  afterAll(async () => {
    await client.end();
    handle.close();
  });

  describe("GET /cart", () => {
    it("should respond with a list of the cart on response.body", async () => {
      const response = await request.get("/api/cart");
      expect(response.status).toBe(200);

      const { cart } = response.body;
      expect(cart).toBeTruthy();
      expect(cart[0].cartId).toBeTruthy();
    });
  });

  describe("POST /cart, PATCH /cart/:id", () => {
    let createdCartFromPostAction;

    const postCart = {
      sessionId: 5,
      productId: 4,
      quantity: 5,
    };

    afterAll(async () => {
      // deleting any data we create in the course of tests
      // makes our test suites idempotent, meaning that they're repeatable! :)
      await Order.deleteCart(createdCartFromPostAction.id);
    });

    it("POST /cartshould respond with the newly created cart", async () => {
      const response = await request.post("/api/cart").send(postCart);
      createdCartFromPostAction = response.body.cart;

      expect(response.status).toBe(201);
      expect(createdCartFromPostAction).toBeTruthy();
      expect(createdCartFromPostAction.sessionId).toEqual(postCart.sessionId);
    });

    it("PATCH /cart/:id should successfully modify a cart field", async () => {
      const response = await request
        .patch(`/api/cart/${createdcartFromPostAction.id}`)
        .send({ cartId: "5" });

      createdCartFromPostAction = response.body.cart;

      expect(response.status).toBe(303);
      expect(createdCartFromPostAction).toBeTruthy();
      expect(createdCartFromPostAction.cartId).toEqual("3");
    });
  });
});
