import { Response } from "express";

import { AppError } from "../../common/errors/AppError";
import { AuthRequest } from "../../middleware/auth.middleware";
import { OrganizationService } from "./organization.service";
import { createOrganizationSchema } from "./organization.validation";

export class OrganizationController {
    private service = new OrganizationService();

    create = async (req: AuthRequest, res: Response) => {
        if (!req.userId) {
            throw new AppError(
                "Authentication required",
                401,
                "UNAUTHORIZED",
            );
        }

        const data = createOrganizationSchema.parse(req.body);

        const organization = await this.service.create(
            req.userId,
            data,
        );

        res.status(201).json({
            success: true,
            data: organization,
        });
    };

    getMyOrganizations = async (
        req: AuthRequest,
        res: Response,
    ) => {
        if (!req.userId) {
            throw new AppError(
                "Authentication required",
                401,
                "UNAUTHORIZED",
            );
        }

        const organizations =
            await this.service.getMyOrganizations(req.userId);

        res.status(200).json({
            success: true,
            data: organizations,
        });
    };

    getById = async (req: AuthRequest, res: Response) => {
        if (!req.userId) {
            throw new AppError(
                "Authentication required",
                401,
                "UNAUTHORIZED",
            );
        }

        const organization = await this.service.getById(
            req.userId,
            String(req.params.id),
        );

        res.status(200).json({
            success: true,
            data: organization,
        });
    };
}