import formApi from '../API/index';

const inert = require('inert');

const plugin = [];

plugin.push({
  plugin: inert,
  options: {},
});

const form_api = {
  register: async (server, options) => {
    server.route(formApi);
  },
  name: 'formApi',
  version: '1.0.0',
};

plugin.push({
  plugin: form_api,
});

export default plugin;
