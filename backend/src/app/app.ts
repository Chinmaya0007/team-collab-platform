import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import pinoHttp from 'pino-http';

import routes from './routes';
import { logger } from '../config/logger';

import { notFoundMiddleware } from '../middleware/notFound.middleware';
import { errorMiddleware } from '../middleware/error.middleware';

const app = express();

app.disable('x-powered-by');

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(helmet());

app.use(compression());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
  pinoHttp({
    logger,
  }),
);

app.use(routes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;