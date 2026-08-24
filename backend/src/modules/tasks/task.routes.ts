import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";
import { TaskController } from "./task.controller";

const router = Router();
const controller = new TaskController();

router.use(authMiddleware);

router.post("/", controller.create);

router.get(
  "/project/:projectId",
  controller.getByProject,
);

router.get(
  "/:id",
  controller.getById,
);

router.patch("/:id", controller.update);

router.delete("/:id", controller.delete);

export default router;