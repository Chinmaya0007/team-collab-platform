import "dotenv/config";
import { defineConfig } from "prisma/config";

console.log(
  "Prisma migration URL:",
  process.env.DIRECT_URL?.replace(/\/\/.*@/, "//***@"),
);

export default defineConfig({
  schema: "prisma/schema.prisma",

  migrations: {
    path: "prisma/migrations",
  },

  datasource: {
    url: process.env.DIRECT_URL!,
  },
});