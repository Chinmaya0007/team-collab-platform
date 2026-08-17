import { prisma } from "../../config/prisma";

export class TaskRepository {
  create(data: {
    projectId: string;
    title: string;
    description?: string;
    priority?: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
    assigneeId?: string;
  }) {
    return prisma.task.create({
      data,
    });
  }

  findById(id: string) {
    return prisma.task.findUnique({
      where: { id },
    });
  }

  findByProject(projectId: string) {
    return prisma.task.findMany({
      where: { projectId },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  update(id: string, data: {
    title?: string;
    description?: string;
    status?: "TODO" | "IN_PROGRESS" | "IN_REVIEW" | "DONE";
    priority?: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
    assigneeId?: string | null;
  }) {
    return prisma.task.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return prisma.task.delete({
      where: { id },
    });
  }
}