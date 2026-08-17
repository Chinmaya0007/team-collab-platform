import { AppError } from "../../common/errors/AppError";
import { OrganizationRepository } from "../organizations/organization.repository";
import { ProjectRepository } from "../projects/project.repository";
import { TaskRepository } from "./task.repository";
import {
  CreateTaskDto,
  UpdateTaskDto,
} from "./task.validations";

export class TaskService {
  private repository = new TaskRepository();
  private projectRepository = new ProjectRepository();
  private organizationRepository = new OrganizationRepository();

  async create(userId: string, data: CreateTaskDto) {
    const project = await this.projectRepository.findById(
      data.projectId,
    );

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

    return this.repository.create(data);
  }

  async getByProject(
    userId: string,
    projectId: string,
  ) {
    const project = await this.projectRepository.findById(
      projectId,
    );

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
        "Project access denied",
        403,
        "PROJECT_ACCESS_DENIED",
      );
    }

    return this.repository.findByProject(projectId);
  }

  async update(
    userId: string,
    taskId: string,
    data: UpdateTaskDto,
  ) {
    const task = await this.repository.findById(taskId);

    if (!task) {
      throw new AppError(
        "Task not found",
        404,
        "TASK_NOT_FOUND",
      );
    }

    const project = await this.projectRepository.findById(
      task.projectId,
    );

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
        "Task access denied",
        403,
        "TASK_ACCESS_DENIED",
      );
    }

    return this.repository.update(taskId, data);
  }

  async delete(userId: string, taskId: string) {
    await this.update(userId, taskId, {});

    await this.repository.delete(taskId);
  }
}