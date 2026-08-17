import { AppError } from "../../common/errors/AppError";
import { ProjectRepository } from "../projects/project.repository";
import { TaskRepository } from "../tasks/task.repository";
import { OrganizationRepository } from "../organizations/organization.repository";
import { CommentRepository } from "./comment.repository";
import {
  CreateCommentDto,
  UpdateCommentDto,
} from "./comment.validations";

export class CommentService {
  private repository = new CommentRepository();
  private taskRepository = new TaskRepository();
  private projectRepository = new ProjectRepository();
  private organizationRepository = new OrganizationRepository();

  async create(userId: string, data: CreateCommentDto) {
    const task = await this.taskRepository.findById(data.taskId);

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
        "Comment access denied",
        403,
        "COMMENT_ACCESS_DENIED",
      );
    }

    return this.repository.create({
      taskId: data.taskId,
      authorId: userId,
      content: data.content,
    });
  }

  async getByTask(userId: string, taskId: string) {
    const task = await this.taskRepository.findById(taskId);

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
        "Comment access denied",
        403,
        "COMMENT_ACCESS_DENIED",
      );
    }

    return this.repository.findByTask(taskId);
  }

  async update(
    userId: string,
    commentId: string,
    data: UpdateCommentDto,
  ) {
    const comment = await this.repository.findById(commentId);

    if (!comment) {
      throw new AppError(
        "Comment not found",
        404,
        "COMMENT_NOT_FOUND",
      );
    }

    if (comment.authorId !== userId) {
      throw new AppError(
        "You can only edit your own comments",
        403,
        "COMMENT_ACCESS_DENIED",
      );
    }

    return this.repository.update(
      commentId,
      data.content,
    );
  }

  async delete(userId: string, commentId: string) {
    const comment = await this.repository.findById(commentId);

    if (!comment) {
      throw new AppError(
        "Comment not found",
        404,
        "COMMENT_NOT_FOUND",
      );
    }

    if (comment.authorId !== userId) {
      throw new AppError(
        "You can only delete your own comments",
        403,
        "COMMENT_ACCESS_DENIED",
      );
    }

    await this.repository.delete(commentId);
  }
}