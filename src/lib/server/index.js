import hapi from 'hapi';
import { serverConfig } from './server.config';
import plugin from '../plugins/index';

/* eslint-disable */
import db from "../database/mongodb/index";
/* eslint-enable */

async function start() {
  // hapi server is configed
  const server = new hapi.Server(serverConfig);

  // all the plugin are registered here
  await server.register(plugin);

  // hapi server is started
  await server.start();
  console.log(`Server is started at @${server.info.uri}`);
}

start()
  .then(() => {
    console.log('Server is started and all the plugin is added');
  })
  .catch(() => {
    console.log('Error while starting and adding plugin');
  });
