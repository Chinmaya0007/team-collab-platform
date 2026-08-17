import { Response } from "express";

import { AppError } from "../../common/errors/AppError";
import { AuthRequest } from "../../middleware/auth.middleware";
import { TaskService } from "./task.service";
import {
  createTaskSchema,
  updateTaskSchema,
} from "./task.validations";

export class TaskController {
  private service = new TaskService();

  create = async (req: AuthRequest, res: Response) => {
    if (!req.userId) {
      throw new AppError(
        "Authentication required",
        401,
        "UNAUTHORIZED",
      );
    }

    const data = createTaskSchema.parse(req.body);

    const task = await this.service.create(
      req.userId,
      data,
    );

    res.status(201).json({
      success: true,
      data: task,
    });
  };

  getByProject = async (
    req: AuthRequest,
    res: Response,
  ) => {
    if (!req.userId) {
      throw new AppError(
        "Authentication required",
        401,
        "UNAUTHORIZED",
      );
    }

    const tasks = await this.service.getByProject(
      req.userId,
      String(req.params.projectId),
    );

    res.status(200).json({
      success: true,
      data: tasks,
    });
  };

  update = async (req: AuthRequest, res: Response) => {
    if (!req.userId) {
      throw new AppError(
        "Authentication required",
        401,
        "UNAUTHORIZED",
      );
    }

    const data = updateTaskSchema.parse(req.body);

    const task = await this.service.update(
      req.userId,
      String(req.params.id),
      data,
    );

    res.status(200).json({
      success: true,
      data: task,
    });
  };

  delete = async (req: AuthRequest, res: Response) => {
    if (!req.userId) {
      throw new AppError(
        "Authentication required",
        401,
        "UNAUTHORIZED",
      );
    }

    await this.service.delete(
      req.userId,
      String(req.params.id),
    );

    res.status(204).send();
  };
}