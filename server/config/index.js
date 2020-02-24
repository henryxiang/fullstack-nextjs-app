const configBodyParser = require('./express-body-parser');
const configCookieParser = require('./express-cookie-parser');
const configLogger = require('./express-logger');
const configSession = require('./express-session');
const configPassport= require('./passport');
const configApolloServer = require('./express-apollo');
const configViewEngine = require('./express-view-engine');
const configRoutes = require('../routes');

const config = (server) => {
  configBodyParser(server);
  configCookieParser(server);
  configLogger(server);
  configSession(server);
  configPassport(server);
  configApolloServer(server);
  configViewEngine(server);
  configRoutes(server);
};

module.exports = config;
