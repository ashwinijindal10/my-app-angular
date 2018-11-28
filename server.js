'use strict';
//load env variable 
const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./config');
const Routes = require('./lib/route');
const Models = require('./lib/models');

const server = new Hapi.Server({ port: Settings.port });

server.route(Routes);

const init = async () => {
  Models.sequelize.sync().then(() => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  });
};


process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
