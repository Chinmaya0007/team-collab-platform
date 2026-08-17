import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";
import { CommentController } from "./comment.controller";

const router = Router();
const controller = new CommentController();

router.use(authMiddleware);

router.post("/", controller.create);
router.get(
  "/task/:taskId",
  controller.getByTask,
);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;