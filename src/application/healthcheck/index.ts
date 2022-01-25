import { Server } from 'http';

import { createTerminus } from '@godaddy/terminus';

function onSignal () {
  console.log('server is starting cleanup')
  return Promise.resolve('Ok')
}

async function onHealthCheck () {
  return Promise.resolve('Ok')
}
export const enableHealthCheck = (server: Server) => {
  createTerminus(server, {
    signal: 'SIGINT',
    healthChecks: { '/healthcheck': onHealthCheck },
    onSignal
  })
}
