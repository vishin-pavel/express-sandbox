import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { routes } from './routes';
import { exceptionHandlerMiddleware } from './exceptions/exceptionHandler.middleware';
import morgan from 'morgan'

export const app: Application = express();
app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: false,
}))
routes(app);
app.use(exceptionHandlerMiddleware)

