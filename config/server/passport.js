const passport = require('passport');
const appConfig = require('../../config/app-config');
const auth = require('../auth');

const { strategy = 'local' } = appConfig.auth.strategy;
const configPassport = auth[strategy];

const config = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  configPassport(passport);
  app.set('passport', passport);
}

module.exports = config;
