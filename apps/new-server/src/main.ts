/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import logger from '../../../libs/logger';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to new-server!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  logger.info(`Listening at http://localhost:${port}/api`);
});
server.on('error', logger.error);
