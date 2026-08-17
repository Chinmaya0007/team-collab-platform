import request from "supertest";
import { describe, expect, it } from "vitest";

import app from "./app";

describe("Health API", () => {
  it("should return API health status", async () => {
    const response = await request(app)
      .get("/api/v1/health");

    expect(response.status).toBe(200);

    expect(response.body).toMatchObject({
      success: true,
      message: "Nexus API is running",
    });

    expect(response.body.timestamp).toBeDefined();
  });
});