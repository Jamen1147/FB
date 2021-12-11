import express from 'express';
import cors from 'cors';
import config from 'config';
import Database from './helpers/database';
import env from './helpers/env';
import { NotFound } from './helpers/httpError';
import errorHandler from './middlewares/errorHandler';
import responseWrapper from './middlewares/responseWrapper';

const app = express();

app.use(cors({}));
app.use(express.json());
app.use(responseWrapper);

// Routes

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
