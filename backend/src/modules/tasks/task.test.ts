import request from "supertest";
import { describe, expect, it } from "vitest";

import app from "../../app/app";

describe("Task authorization", () => {
  it("should reject unauthenticated task creation", async () => {
    const response = await request(app)
      .post("/api/v1/tasks")
      .send({
        projectId: "fake-project-id",
        title: "Unauthorized task",
      });

    expect(response.status).toBe(401);
  });
});