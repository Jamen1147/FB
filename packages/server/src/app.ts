import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import config from 'config';
import Database from './helpers/database';
import env from './helpers/env';
import { NotFound } from './helpers/httpError';
import errorHandler from './middlewares/errorHandler';
import responseWrapper from './middlewares/responseWrapper';
import userRouter from './routes/user';
import authRouter from './routes/auth';

const app = express();

// Middlewares
app.use(cors({}));
app.use(cookieParser());
app.use(express.json());

// Custom middlewares
app.use(responseWrapper);

// Routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/auth', authRouter);

// Not Found
app.use((_, __, next) => next(new NotFound('Request Not Found')));

// Error Handling
app.use(errorHandler);

// Connect DB
Database.connect().then(() => {
  const port = env.port || config.server.port;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(` App is running at port ${port} in ${env.current} mode`);
  });
});

export default app;
