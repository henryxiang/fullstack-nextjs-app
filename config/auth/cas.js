const authProvider = require('passport-cas');
const appConfig = require('../../config/app-config');
const getLogger = require('../../utils/log-factory');

const log = getLogger('config/auth/cas');
const { serverBaseUrl, port, context, isProxyOn } = appConfig.http;
const { strategy } = appConfig.auth;
const ssoBaseURL = appConfig.auth.cas.loginUrl;
const version = appConfig.auth.cas.version;
const serverFullUrl = (port && !(port === 80 || port === 443)) ? `${serverBaseUrl}:${port}` : serverBaseUrl;
const serverBaseURL = isProxyOn ? `${serverFullUrl}${context}`.replace(/:\d+/, '') : `${serverFullUrl}${context}`;

const authStrategy = new authProvider.Strategy(
  { version, ssoBaseURL, serverBaseURL },
  (profile, done) => {
    const loginId = profile.user;
    const user = {
      id: loginId,
      name: loginId,
    };
    return done(null, user);
  }
);

const config = (passport) => {
  log.info(`use ${strategy} authentication strategy`);
  log.info(`isProxyOn: ${isProxyOn}, redirect URL: ${serverBaseURL}`);
  passport.use(authStrategy);

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    const user = {
      id,
      name: id,
    };
    done(null, user);
  });
};

const authMiddleware = (req, res, next) => {
  const passport = req.app.get('passport');
  const loginSuccessRedirectUrl = `${context}/`;
  passport.authenticate('cas', (err, user, info) => {
    if (err) {
      return res.status(403).send('Access forbidden');
    }

    if (!user) {
      req.session.messages = info.message;
      return res.status(401).send('Unauthorized');
    }

    req.logIn(user, (loginError) => {
      if (loginError) {
        return res.status(401).send('Unauthorized');
      }

      req.session.messages = '';
      return res.redirect(loginSuccessRedirectUrl);
    });

    return null;
  })(req, res, next);
};

module.exports = { config, authMiddleware };
