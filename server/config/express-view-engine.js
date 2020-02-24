const path = require('path');
const appConfig = require('./app-config');

const config = (server) => {
  server.set('view engine', 'ejs');
  server.set('views', path.resolve(appConfig.baseDir, 'server', 'views'));
}

module.exports = config;
