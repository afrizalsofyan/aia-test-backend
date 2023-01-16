const request = require("supertest");
const app = require("../../index");

describe("GET feeds from flickr", () => {
  test("should return list feeds", async () => {
    const res = await request(app).get("/feeds");
    const body = res.body;
    expect(body.success).toBe(true);
    expect(body.data.length).toBeGreaterThan(0);
  });
});
