import { AppError } from "../../common/errors/AppError";
import { OrganizationRepository } from "../organizations/organization.repository";
import { ProjectRepository } from "./project.repository";
import { CreateProjectDto } from "./project.validations";

export class ProjectService {
  private repository = new ProjectRepository();
  private organizationRepository = new OrganizationRepository();

  async create(userId: string, data: CreateProjectDto) {
    const membership =
      await this.organizationRepository.findUserMembership(
        userId,
        data.organizationId,
      );

    if (!membership) {
      throw new AppError(
        "You do not belong to this organization",
        403,
        "ORGANIZATION_ACCESS_DENIED",
      );
    }

    const existing = await this.repository.findBySlug(
      data.organizationId,
      data.slug,
    );

    if (existing) {
      throw new AppError(
        "Project slug already exists",
        409,
        "PROJECT_SLUG_EXISTS",
      );
    }

    return this.repository.create(data);
  }

  async getAll(userId: string, organizationId: string) {
    const membership =
      await this.organizationRepository.findUserMembership(
        userId,
        organizationId,
      );

    if (!membership) {
      throw new AppError(
        "You do not belong to this organization",
        403,
        "ORGANIZATION_ACCESS_DENIED",
      );
    }

    return this.repository.findByOrganization(organizationId);
  }

  async getById(userId: string, projectId: string) {
    const project = await this.repository.findById(projectId);

    if (!project) {
      throw new AppError(
        "Project not found",
        404,
        "PROJECT_NOT_FOUND",
      );
    }

    const membership =
      await this.organizationRepository.findUserMembership(
        userId,
        project.organizationId,
      );

    if (!membership) {
      throw new AppError(
        "You do not have access to this project",
        403,
        "PROJECT_ACCESS_DENIED",
      );
    }

    return project;
  }

  async update(
    userId: string,
    projectId: string,
    data: {
      name?: string;
      description?: string;
    },
  ) {
    await this.getById(userId, projectId);

    return this.repository.update(projectId, data);
  }

  async delete(userId: string, projectId: string) {
    await this.getById(userId, projectId);

    await this.repository.delete(projectId);
  }
}