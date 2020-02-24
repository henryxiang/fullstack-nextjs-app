const router = require('express').Router();
const config = require('../config/app-config');

const authStrategy = config.auth.strategy || 'local';
const casLogoutUrl = config.auth.cas.logoutUrl;

router.get('/', (req, res) => {
  req.logOut();
  if (authStrategy === 'cas') {
    req.session.destroy(() => {
      res.clearCookie('connect.sid', { path: '/' });
      res.redirect(casLogoutUrl);
    });
  }
});

module.exports = router;