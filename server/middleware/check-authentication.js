const loginUrl = '/login';

const ensureAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect(loginUrl);
  }
};

module.exports = ensureAuthentication;
