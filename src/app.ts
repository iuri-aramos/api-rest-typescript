import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';

const port = config.get<number>('port');
const app = express();

app.listen(port, async () => {

  logger.info(`This server is running in the port ${port}!`);

  await connect();
})