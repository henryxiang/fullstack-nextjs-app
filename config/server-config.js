const configBodyParser = require('./express-body-parser');
const configCookieParser = require('./express-cookie-parser');
const configLogger = require('./express-logger');
const configSession = require('./express-session');
const configPassport= require('./passport');

const config = (server) => {
  configBodyParser(server);
  configCookieParser(server);
  configLogger(server);
  configSession(server);
  configPassport(server);
};

module.exports = config;
