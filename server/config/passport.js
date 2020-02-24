const passport = require('passport');
const appConfig = require('./app-config');
const auth = require('./auth');

const strategy = appConfig.auth.strategy;
// const configPassport = auth[strategy];

const config = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  auth[strategy].config(passport);
  app.set('passport', passport);
}

module.exports = config;
