import { AppError } from "../../common/errors/AppError";
import { OrganizationRepository } from "./organization.repository";
import { CreateOrganizationDto } from "./organization.validation";

export class OrganizationService {
  private repository = new OrganizationRepository();

  async create(userId: string, data: CreateOrganizationDto) {
    const existing = await this.repository.findBySlug(data.slug);

    if (existing) {
      throw new AppError(
        "Organization slug already exists",
        409,
        "ORGANIZATION_SLUG_EXISTS",
      );
    }

    return this.repository.create({
      name: data.name,
      slug: data.slug,
      ownerId: userId,
    });
  }

  async getById(userId: string, organizationId: string) {
    const membership = await this.repository.findUserMembership(
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

    return this.repository.findById(organizationId);
  }

  async getMyOrganizations(userId: string) {
    return this.repository.findUserOrganizations(userId);
  }
}