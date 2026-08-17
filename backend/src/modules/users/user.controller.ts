import { Request, Response } from "express";
import { UserService } from "./user.service";

const userService = new UserService();

export class UserController {
  async getUsers(_req: Request, res: Response) {
    const users = await userService.getAllUsers();

    res.status(200).json(users);
  }
}