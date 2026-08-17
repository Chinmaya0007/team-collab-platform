import { prisma } from "../../config/prisma";

export class OrganizationRepository {
  create(data: {
    name: string;
    slug: string;
    ownerId: string;
  }) {
    return prisma.organization.create({
      data: {
        name: data.name,
        slug: data.slug,
        ownerId: data.ownerId,
        memberships: {
          create: {
            userId: data.ownerId,
            role: "OWNER",
          },
        },
      },
      include: {
        memberships: true,
      },
    });
  }

  findBySlug(slug: string) {
    return prisma.organization.findUnique({
      where: { slug },
    });
  }

  findById(id: string) {
    return prisma.organization.findUnique({
      where: { id },
      include: {
        memberships: true,
      },
    });
  }

  findUserMembership(userId: string, organizationId: string) {
    return prisma.membership.findUnique({
      where: {
        userId_organizationId: {
          userId,
          organizationId,
        },
      },
    });
  }

  findUserOrganizations(userId: string) {
    return prisma.organization.findMany({
      where: {
        memberships: {
          some: {
            userId,
          },
        },
      },
      include: {
        memberships: {
          where: {
            userId,
          },
        },
      },
    });
  }
}