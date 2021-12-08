import pino from 'pino';
import pretty from 'pino-pretty';

const stream = pretty({
  ignore: 'pid,hostname',
  translateTime: 'yyyy-mm-dd HH:MM:ss'
});

const log = pino(stream)

export default log;