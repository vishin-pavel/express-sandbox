import { Router } from 'express';
import {PingController} from "./Ping.controller";
import {controllerRunner, runnerFor} from "../../expressAdapters/ControllerRunner";


export const PingRouter = Router();
const run = runnerFor(PingController)

// call controller using common runner
PingRouter.get('/ping', controllerRunner(PingController, 'ping'));
// call controller using shorthand runner
PingRouter.get('/pong', run('pong'));
PingRouter.post('/:name/echo', run('echo'))
