const appConfig = require('../config/app-config');

const loginUrl = appConfig.auth.loginPath;

const ensureAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect(loginUrl);
  }
};

const requireAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.status(403).send('Access forbidden');
  }
};

module.exports = {
  ensureAuthentication,
  requireAuthentication,
}
