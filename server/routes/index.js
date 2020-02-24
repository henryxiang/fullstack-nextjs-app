const loginRoute = require('./local-login');
const appConfig = require('../config/app-config');
const auth = require('../config/auth');

const { strategy, loginPath } = appConfig.auth;
const { context } = appConfig.http;

const config = (app) => {
  if (strategy === 'local') {
    console.log(`local login route: ${context}/${loginPath}`);
    app.use(`${context}/${loginPath}`, loginRoute);
  } else {
    app.use(`${context}/${loginPath}`, auth[strategy].authMiddleware);
  }
};

module.exports = config;
