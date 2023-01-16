const request = require("supertest");
const app = require("../../index");

// describe("GET /feeds", () => {
//   it("should return list feeds of flickr", async () => {
//     const res = await request(app).get("/feeds");
//     expect(res.success).toContain();
//     expect(res.body.length).toBeGreaterThan(0);
//   });
// });

describe("GET feeds from flickr", () => {
  test("should return list feeds", async () => {
    const res = await request(app).get("/feeds");
    const body = res.body;
    expect(body.success).toBe(true);
    expect(body.data.length).toBeGreaterThan(0);
  });
});
