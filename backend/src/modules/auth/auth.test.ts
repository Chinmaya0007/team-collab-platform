import request from "supertest";
import { describe, expect, it } from "vitest";

import app from "../../app/app";

describe("Authentication API", () => {
  const email = `test-${Date.now()}@example.com`;
  const username = `testuser${Date.now()}`;
  const password = "Password123";

  let accessToken: string;

  it("should register a user", async () => {
    const response = await request(app)
      .post("/api/v1/auth/register")
      .send({
        email,
        username,
        password,
        firstName: "Test",
        lastName: "User",
      });

    expect(response.status).toBe(201);
    expect(response.body.accessToken).toBeDefined();
    expect(response.body.refreshToken).toBeDefined();
  });

  it("should login the user", async () => {
    const response = await request(app)
      .post("/api/v1/auth/login")
      .send({
        email,
        password,
      });

    expect(response.status).toBe(200);
    expect(response.body.accessToken).toBeDefined();

    accessToken = response.body.accessToken;
  });

  it("should access the protected /me endpoint", async () => {
    const response = await request(app)
      .get("/api/v1/auth/me")
      .set("Authorization", `Bearer ${accessToken}`);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.email).toBe(email);
  });
});