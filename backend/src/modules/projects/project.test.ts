import request from "supertest";
import { describe, expect, it } from "vitest";

import app from "../../app/app";

describe("Project authorization", () => {
  it("should reject unauthenticated project creation", async () => {
    const response = await request(app)
      .post("/api/v1/projects")
      .send({
        organizationId: "fake-organization-id",
        name: "Unauthorized Project",
        slug: "unauthorized-project",
      });

    expect(response.status).toBe(401);
  });
});