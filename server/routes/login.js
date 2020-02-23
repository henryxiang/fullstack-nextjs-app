const router = require('express').Router();
const passportLogin = require('../middleware/passport-login');
const appConfig = require('../../config/app-config');

const context = appConfig.http && appConfig.http.context || '';

// Render login page
router.get('/', (_, res) => {
  res.render('login', { context });
});

// Authenticate the user
router.post('/',
  passportLogin,
  (_, res) => res.redirect(`${context}/`),
);

module.exports = router;
