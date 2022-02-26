const { server, handle } = require("../../index");
const { client, Product } = require("../../db");
const supertest = require("supertest");
const request = supertest(server);

describe("/api/product endpoint", () => {
  afterAll(async () => {
    await client.end();
    handle.close();
  });

  describe("GET /product", () => {
    it("should respond with a list of products on response.body", async () => {
      const response = await request.get("/api/product");
      expect(response.status).toBe(200);

      const { product } = response.body;
      expect(product).toBeTruthy();
      expect(product[0].username).toBeTruthy();
    });
  });

  describe("POST /, PATCH /product/:id", () => {
    let createdProductFromPostAction;

    const postProduct = {
      id: 5,
      name: "desert watch",
      description: "best watch in town",
      inventoryId: 3,
      categoryId: 2,
      discountId: 3,
      price: 250,
    };

    afterAll(async () => {
      // deleting any data we create in the course of tests
      // makes our test suites idempotent, meaning that they're repeatable! :)
      await Product.deleteProduct(createdProductFromPostAction.id);
    });

    it("POST /product should respond with the newly created product", async () => {
      const response = await request.post("/api/product").send(postProduct);
      createdProductFromPostAction = response.body.product;

      expect(response.status).toBe(201);
      expect(createdProductFromPostAction).toBeTruthy();
      expect(createdProductFromPostAction.name).toEqual(postProduct.id);
    });

    it("PATCH /product/:id should successfully modify a product field", async () => {
      const response = await request
        .patch(`/api/product/${createdProductFromPostAction.id}`)
        .send({ name: "desert watch" });

      createdProductFromPostAction = response.body.product;

      expect(response.status).toBe(303);
      expect(createdProductFromPostAction).toBeTruthy();
      expect(createdProductFromPostAction.name).toEqual("desert watch");
    });
  });
});
