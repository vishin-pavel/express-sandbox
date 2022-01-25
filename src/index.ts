import { createServer } from 'http';
import { app } from './application/app';
import { enableHealthCheck } from './application/healthcheck';

const port = process.env.PORT || 8887;
const server = createServer(app)
enableHealthCheck(server)
server.listen(port, () => console.log(`Server is listening on port ${port}!`));
