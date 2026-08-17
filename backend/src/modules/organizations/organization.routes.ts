import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";
import { OrganizationController } from "./organization.controller";

const router = Router();
const controller = new OrganizationController();

router.use(authMiddleware);

router.post("/", controller.create);
router.get("/", controller.getMyOrganizations);
router.get("/:id", controller.getById);

export default router;