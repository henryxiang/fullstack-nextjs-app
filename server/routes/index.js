const loginRoute = require('./login');
const appConfig = require('../../config/app-config');
const cas = require('../../config/auth/cas');

const config = (app) => {
  if (appConfig.auth.strategy === 'local') {
    app.use('/login', loginRoute);
  } else {
    app.use('/login', cas.authMiddleware);
  }
};

module.exports = config;
