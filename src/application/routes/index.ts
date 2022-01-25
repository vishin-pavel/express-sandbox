import { Application } from 'express';
import { PingRouter } from '../useCases/ping/ping.routes';

const SERVICE_ROUT_PREFIX = process.env.ROUT_PREFIX || 'check'

export const routes = (app: Application) => {
  app.use(`/${SERVICE_ROUT_PREFIX}`, PingRouter)
};
