const request = require("supertest");
const app = require("../server");

describe("GET /api/tasks", () => {
  test("should return 200", async () => {
    const response = await request(app).get("/api/tasks");

    expect(response.statusCode).toBe(200);
  });
});