import { Response } from "express";

import { AppError } from "../../common/errors/AppError";
import { AuthRequest } from "../../middleware/auth.middleware";
import { CommentService } from "./comment.service";
import {
  createCommentSchema,
  updateCommentSchema,
} from "./comment.validations";

export class CommentController {
  private service = new CommentService();

  create = async (req: AuthRequest, res: Response) => {
    if (!req.userId) {
      throw new AppError(
        "Authentication required",
        401,
        "UNAUTHORIZED",
      );
    }

    const data = createCommentSchema.parse(req.body);

    const comment = await this.service.create(
      req.userId,
      data,
    );

    res.status(201).json({
      success: true,
      data: comment,
    });
  };

  getByTask = async (
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

    const comments = await this.service.getByTask(
      req.userId,
      String(req.params.taskId),
    );

    res.status(200).json({
      success: true,
      data: comments,
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

    const data = updateCommentSchema.parse(req.body);

    const comment = await this.service.update(
      req.userId,
      String(req.params.id),
      data,
    );

    res.status(200).json({
      success: true,
      data: comment,
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