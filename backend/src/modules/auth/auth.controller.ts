import { Request, Response } from "express";

import { AuthService } from "./auth.service";
import { loginSchema, registerSchema } from "./auth.validation";
import { AppError } from "../../common/errors/AppError";
import { AuthRequest } from "../../middleware/auth.middleware";

export class AuthController {
    private service = new AuthService();

    register = async (req: Request, res: Response) => {
        const body = registerSchema.parse(req.body);

        const result = await this.service.register(body);

        res.status(201).json(result);
    };

    login = async (req: Request, res: Response) => {
        const body = loginSchema.parse(req.body);

        const result = await this.service.login(body);

        res.status(200).json(result);
    };

    me = async (req: AuthRequest, res: Response) => {
        if (!req.userId) {
            throw new AppError(
                "Authentication required",
                401,
                "UNAUTHORIZED",
            );
        }

        const user = await this.service.getMe(req.userId);

        res.status(200).json({
            success: true,
            data: user,
        });
    };

    refresh = async (req: Request, res: Response) => {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            throw new AppError(
                "Refresh token is required",
                400,
                "REFRESH_TOKEN_REQUIRED",
            );
        }

        const result = await this.service.refresh(refreshToken);

        res.status(200).json({
            success: true,
            data: result,
        });
    };

    logout = async (req: Request, res: Response) => {
        const { refreshToken } = req.body;

        if (refreshToken) {
            await this.service.logout(refreshToken);
        }

        res.status(200).json({
            success: true,
            message: "Logged out successfully",
        });
    };

    logoutAll = async (req: AuthRequest, res: Response) => {
        if (!req.userId) {
            throw new AppError(
                "Authentication required",
                401,
                "UNAUTHORIZED",
            );
        }

        await this.service.logoutAll(req.userId);

        res.status(200).json({
            success: true,
            message: "Logged out from all devices",
        });
    };
}