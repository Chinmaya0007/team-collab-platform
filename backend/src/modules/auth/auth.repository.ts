import { prisma } from "../../config/prisma";

export class AuthRepository {
    findByEmail(email: string) {
        return prisma.user.findUnique({
            where: { email },
        });
    }

    findByUsername(username: string) {
        return prisma.user.findUnique({
            where: { username },
        });
    }

    createUser(data: {
        email: string;
        username: string;
        passwordHash: string;
        firstName?: string;
        lastName?: string;
    }) {
        return prisma.user.create({
            data,
        });
    }

    createSession(data: {
        userId: string;
        refreshToken: string;
        expiresAt: Date;
        userAgent?: string;
        ipAddress?: string;
    }) {
        return prisma.session.create({
            data,
        });
    }

    getSession(refreshToken: string) {
        return prisma.session.findUnique({
            where: { refreshToken },
            include: {
                user: true,
            },
        });
    }

    deleteSession(refreshToken: string) {
        return prisma.session.delete({
            where: { refreshToken },
        });
    }

    findById(userId: string) {
        return prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                username: true,
                firstName: true,
                lastName: true,
                avatarUrl: true,
                isEmailVerified: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
        });

    }
    deleteSessionBy(sessionId: string) {
        return prisma.session.delete({
            where: { id: sessionId },
        });
    }

    deleteAllSessions(userId: string) {
        return prisma.session.deleteMany({
            where: { userId },
        });
    }
}