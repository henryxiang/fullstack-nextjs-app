const appConfig = require('../../config/app-config');

const context = appConfig.http && appConfig.http.context || '';
const failureRedirect = `${context}/login`;

const passportLogin = (req, res, next) => {
  console.log('user login');
  const passport = req.app.get('passport');
  const passportMiddleware = passport.authenticate('local', { failureRedirect });
  passportMiddleware(req, res, next);
};

module.exports = passportLogin;
