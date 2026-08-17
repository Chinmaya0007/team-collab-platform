import { Router } from "express";

import { API_PREFIX } from "../config/constants";
import { AppError } from "../common/errors/AppError";

import userRoutes from "../modules/users/user.routes";
import authRoutes from "../modules/auth/auth.routes";
import organizationRoutes from "../modules/organizations/organization.routes";
import projectRoutes from "../modules/projects/project.routes";
import taskRoutes from "../modules/tasks/task.routes";
import commentRoutes from "../modules/comments/comment.routes";

const router = Router();

router.get(`${API_PREFIX}/health`, (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Nexus API is running",
    timestamp: new Date().toISOString(),
  });
});

router.get("/test-error", () => {
  throw new AppError("Testing Error", 400, "VALIDATION_ERROR");
});

// API Routes
router.use(`${API_PREFIX}/users`, userRoutes);
router.use(`${API_PREFIX}/auth`, authRoutes);
router.use(
  `${API_PREFIX}/organizations`,
  organizationRoutes,
);
router.use(
  `${API_PREFIX}/projects`,
  projectRoutes,
);
router.use(`${API_PREFIX}/tasks`, taskRoutes);
router.use(
  `${API_PREFIX}/comments`,
  commentRoutes,
);

export default router;