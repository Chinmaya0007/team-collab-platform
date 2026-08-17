import argon2 from "argon2";

import { AppError } from "../../common/errors/AppError";
import { AuthRepository } from "./auth.repository";
import {
    generateAccessToken,
    generateRefreshToken,
} from "./auth.tokens";
import {
    LoginDto,
    RegisterDto,
} from "./auth.validation";

export class AuthService {
    private repository = new AuthRepository();

    async register(data: RegisterDto) {
        const existingEmail = await this.repository.findByEmail(data.email);

        if (existingEmail) {
            throw new AppError(
                "Email already exists",
                409,
                "EMAIL_ALREADY_EXISTS",
            );
        }

        const existingUsername = await this.repository.findByUsername(
            data.username,
        );

        if (existingUsername) {
            throw new AppError(
                "Username already exists",
                409,
                "USERNAME_ALREADY_EXISTS",
            );
        }

        const passwordHash = await argon2.hash(data.password);

        const user = await this.repository.createUser({
            email: data.email,
            username: data.username,
            passwordHash,
            firstName: data.firstName,
            lastName: data.lastName,
        });

        const accessToken = generateAccessToken(user.id);
        const refreshToken = generateRefreshToken(user.id);

        await this.repository.createSession({
            userId: user.id,
            refreshToken,
            expiresAt: new Date(
                Date.now() + 7 * 24 * 60 * 60 * 1000,
            ),
        });

        // Never expose the password hash in the API response.
        const { passwordHash: _, ...safeUser } = user;

        return {
            user: safeUser,
            accessToken,
            refreshToken,
        };
    }

    async login(data: LoginDto) {
        const user = await this.repository.findByEmail(data.email);

        if (!user) {
            throw new AppError(
                "Invalid credentials",
                401,
                "INVALID_CREDENTIALS",
            );
        }

        const validPassword = await argon2.verify(
            user.passwordHash,
            data.password,
        );

        if (!validPassword) {
            throw new AppError(
                "Invalid credentials",
                401,
                "INVALID_CREDENTIALS",
            );
        }

        const accessToken = generateAccessToken(user.id);
        const refreshToken = generateRefreshToken(user.id);

        await this.repository.createSession({
            userId: user.id,
            refreshToken,
            expiresAt: new Date(
                Date.now() + 7 * 24 * 60 * 60 * 1000,
            ),
        });

        // Never expose the password hash in the API response.
        const { passwordHash: _, ...safeUser } = user;

        return {
            user: safeUser,
            accessToken,
            refreshToken,
        };
    }

    async getMe(userId: string) {
        const user = await this.repository.findById(userId);

        if (!user) {
            throw new AppError(
                "User not found",
                404,
                "USER_NOT_FOUND",
            );
        }

        return user;
    }

    async refresh(refreshToken: string) {
        const session = await this.repository.getSession(refreshToken);

        if (!session) {
            throw new AppError(
                "Invalid refresh token",
                401,
                "INVALID_REFRESH_TOKEN",
            );
        }

        if (session.expiresAt < new Date()) {
            await this.repository.deleteSession(refreshToken);

            throw new AppError(
                "Refresh token expired",
                401,
                "REFRESH_TOKEN_EXPIRED",
            );
        }

        const accessToken = generateAccessToken(session.user.id);
        const newRefreshToken = generateRefreshToken(session.user.id);

        await this.repository.deleteSession(refreshToken);

        await this.repository.createSession({
            userId: session.user.id,
            refreshToken: newRefreshToken,
            expiresAt: new Date(
                Date.now() + 7 * 24 * 60 * 60 * 1000,
            ),
        });

        return {
            accessToken,
            refreshToken: newRefreshToken,
        };
    }

    async logout(refreshToken: string) {
        const session = await this.repository.getSession(refreshToken);

        if (!session) {
            return;
        }

        await this.repository.deleteSession(refreshToken);
    }

    async logoutAll(userId: string) {
        await this.repository.deleteAllSessions(userId);
    }
}