const appConfig = require('../../config/app-config');
const loginRoute = require('./login');
const ensureAuthentication = require('../middleware/check-authentication');

// const context = appConfig.http && appConfig.http.context || '';

const config = (app) => {
  // const passport = app.get('passport')
  app.use('/login', loginRoute);
  app.use('/graphql', ensureAuthentication);
};

module.exports = config;