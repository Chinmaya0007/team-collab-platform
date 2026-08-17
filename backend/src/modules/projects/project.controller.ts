import { Response } from "express";

import { AppError } from "../../common/errors/AppError";
import { AuthRequest } from "../../middleware/auth.middleware";
import { ProjectService } from "./project.service";
import { createProjectSchema } from "./project.validations";

export class ProjectController {
  private service = new ProjectService();

  create = async (req: AuthRequest, res: Response) => {
    if (!req.userId) {
      throw new AppError(
        "Authentication required",
        401,
        "UNAUTHORIZED",
      );
    }

    const data = createProjectSchema.parse(req.body);

    const project = await this.service.create(
      req.userId,
      data,
    );

    res.status(201).json({
      success: true,
      data: project,
    });
  };

  getAll = async (req: AuthRequest, res: Response) => {
    if (!req.userId) {
      throw new AppError(
        "Authentication required",
        401,
        "UNAUTHORIZED",
      );
    }

    const projects = await this.service.getAll(
      req.userId,
      String(req.query.organizationId),
    );

    res.status(200).json({
      success: true,
      data: projects,
    });
  };

  getById = async (req: AuthRequest, res: Response) => {
    if (!req.userId) {
      throw new AppError(
        "Authentication required",
        401,
        "UNAUTHORIZED",
      );
    }

    const project = await this.service.getById(
      req.userId,
      String(req.params.id),
    );

    res.status(200).json({
      success: true,
      data: project,
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

    const project = await this.service.update(
      req.userId,
      String(req.params.id),
      req.body,
    );

    res.status(200).json({
      success: true,
      data: project,
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