import { prisma } from "../../config/prisma";

export class ProjectRepository {
  findBySlug(organizationId: string, slug: string) {
    return prisma.project.findUnique({
      where: {
        organizationId_slug: {
          organizationId,
          slug,
        },
      },
    });
  }

  create(data: {
    organizationId: string;
    name: string;
    slug: string;
    description?: string;
  }) {
    return prisma.project.create({
      data,
    });
  }

  findById(id: string) {
    return prisma.project.findUnique({
      where: { id },
    });
  }

  findByOrganization(organizationId: string) {
    return prisma.project.findMany({
      where: { organizationId },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  update(
    id: string,
    data: {
      name?: string;
      description?: string;
    },
  ) {
    return prisma.project.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return prisma.project.delete({
      where: { id },
    });
  }
}