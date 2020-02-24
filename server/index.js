const express = require('express');
const next = require('next');
const appConfig = require('./config/app-config');
const applyCustomConfig = require('./config');
const { ensureAuthentication } = require('./middleware/check-authentication');
const getLogger = require('../utils/log-factory');

const log = getLogger('server');

const { port = 8080, serverBaseUrl = 'http://localhost' } = appConfig.http;

const dev = appConfig.environment !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  applyCustomConfig(server);

  server.all('*',
    ensureAuthentication,
    (req, res) => handle(req, res)
  );

  server.listen(port, err => {
    if (err) throw err
    log.info(`server started on ${serverBaseUrl}:${port}`)
  });
});
