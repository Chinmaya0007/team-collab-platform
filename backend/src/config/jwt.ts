export const jwtConfig = {
  accessTokenSecret:
    process.env.JWT_ACCESS_SECRET ?? "access-secret-dev",

  refreshTokenSecret:
    process.env.JWT_REFRESH_SECRET ?? "refresh-secret-dev",

  accessTokenExpiresIn: "15m",

  refreshTokenExpiresIn: "7d",
};