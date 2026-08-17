import { prisma } from "../../config/prisma";

export class CommentRepository {
  create(data: {
    taskId: string;
    authorId: string;
    content: string;
  }) {
    return prisma.comment.create({
      data,
      include: {
        author: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            avatarUrl: true,
          },
        },
      },
    });
  }

  findByTask(taskId: string) {
    return prisma.comment.findMany({
      where: { taskId },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            avatarUrl: true,
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  findById(id: string) {
    return prisma.comment.findUnique({
      where: { id },
    });
  }

  update(id: string, content: string) {
    return prisma.comment.update({
      where: { id },
      data: { content },
    });
  }

  delete(id: string) {
    return prisma.comment.delete({
      where: { id },
    });
  }
}