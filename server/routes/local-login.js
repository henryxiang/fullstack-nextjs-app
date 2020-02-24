const router = require('express').Router();
const { authMiddleware } = require('../config/auth/local');
const appConfig = require('../config/app-config');

const context = appConfig.http && appConfig.http.context || '';

// Render login page
router.get('/', (_, res) => {
  res.render('login', { context });
});

// Authenticate the user
router.post('/',
  authMiddleware,
  (_, res) => res.redirect(`${context}/`),
);

module.exports = router;
