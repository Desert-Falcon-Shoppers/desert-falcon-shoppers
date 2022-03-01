const { server, handle } = require("../../index");
const { client, Shop } = require("../../db");
const supertest = require("supertest");
const request = supertest(server);

describe("/api/shop endpoint", () => {
  afterAll(async () => {
    await client.end();
    handle.close();
  });

  describe("GET /shop", () => {
    it("should respond with a list of the shop on response.body", async () => {
      const response = await request.get("/api/shop");
      expect(response.status).toBe(200);

      const { shop } = response.body;
      expect(shop).toBeTruthy();
      expect(shop[0].shopId).toBeTruthy();
    });
  });

  describe("POST /shop, PATCH /shop/:id", () => {
    let createdCartFromPostAction;

    const postShop = {
      userId: 6,
    };

    afterAll(async () => {
      // deleting any data we create in the course of tests
      // makes our test suites idempotent, meaning that they're repeatable! :)
      await Shop.deleteShop(createdShopFromPostAction.id);
    });

    it("POST /shop should respond with the newly created shop", async () => {
      const response = await request.post("/api/shop").send(postShop);
      createdShopFromPostAction = response.body.shop;

      expect(response.status).toBe(201);
      expect(createdShopFromPostAction).toBeTruthy();
      expect(createdShopFromPostAction.sessionId).toEqual(postShop.sessionId);
    });

    it("PATCH /shop/:id should successfully modify a shop field", async () => {
      const response = await request
        .patch(`/api/shop/${createdshopFromPostAction.id}`)
        .send({ shopSessionId: "5" });

      createdShopFromPostAction = response.body.shop;

      expect(response.status).toBe(303);
      expect(createdShopFromPostAction).toBeTruthy();
      expect(createdShopFromPostAction.shopSessionId).toEqual("2");
    });
  });
});
