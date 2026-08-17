import { prisma } from "../../config/prisma";

export class UserService {
  async getAllUsers() {
    return prisma.user.findMany();
  }
}