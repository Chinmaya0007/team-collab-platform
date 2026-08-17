import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";
import { ProjectController } from "./project.controller";

const router = Router();
const controller = new ProjectController();

router.use(authMiddleware);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;