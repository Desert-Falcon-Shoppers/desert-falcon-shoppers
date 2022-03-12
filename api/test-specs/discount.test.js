const { server, handle } = require("../../index");
const { client, Discount } = require("../../db");
const supertest = require("supertest");
const request = supertest(server);

describe("/api/discount endpoint", () => {
  afterAll(async () => {
    await client.end();
    handle.close();
  });

  describe("GET /discount", () => {
    it("should respond with a list of discounts on response.body", async () => {
      const response = await request.get("/api/discount");
      expect(response.status).toBe(200);

      const { discount } = response.body;
      expect(discount).toBeTruthy();
      expect(discount[0].discountId).toBeTruthy();
    });
  });

  describe("POST /discount, PATCH /discount/:id", () => {
    let createdDiscountFromPostAction;

    const postDiscount = {
      name: "discount 2",
      description: "discount for smart watch",
      discountAmount: "100",
      active: "true",
    };

    afterAll(async () => {
      // deleting any data we create in the course of tests
      // makes our test suites idempotent, meaning that they're repeatable! :)
      await Discount.deleteDiscount(createdDiscountFromPostAction.id);
    });

    it("POST /discount should respond with the newly created discount", async () => {
      const response = await request.post("/api/discount").send(postDiscount);
      createdDiscountFromPostAction = response.body.discount;

      expect(response.status).toBe(201);
      expect(createdDiscountFromPostAction).toBeTruthy();
      expect(createdDiscountFromPostAction.name).toEqual(postDiscount.name);
    });

    it("PATCH /discount/:id should successfully modify a discount field", async () => {
      const response = await request
        .patch(`/api/discount/${createdDiscountFromPostAction.id}`)
        .send({ discountId: "5" });

      createdDiscountFromPostAction = response.body.discount;

      expect(response.status).toBe(303);
      expect(createdDiscountFromPostAction).toBeTruthy();
      expect(createdDiscountFromPostAction.discountId).toEqual("2");
    });
  });
});
