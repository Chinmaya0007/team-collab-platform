import app from './app';
import { env } from '../config/env';
import { logger } from '../config/logger';

const server = app.listen(env.PORT, () => {
  logger.info(`🚀 Nexus API running on port ${env.PORT}`);
});

const shutdown = (signal: string) => {
  logger.info(`${signal} received. Shutting down gracefully...`);

  server.close(() => {
    logger.info('HTTP server closed.');

    process.exit(0);
  });
};

process.on('SIGINT', () => shutdown('SIGINT'));

process.on('SIGTERM', () => shutdown('SIGTERM'));