const authProvider = require('passport-local');
const appConfig = require('../../config/app-config');
const getLogger = require('../../utils/log-factory');

const log = getLogger('config/auth/local');
const { strategy } = appConfig.auth;

const userLogin = async (username, password) => {
  let loginUser = null;
  if (password === appConfig.auth.local.password) {
    loginUser = {
      id: username,
      name: username,
    };
  }
  return loginUser;
};

const authStrategy = new authProvider.Strategy(
  async (username, password, cb) => {
      const loginUser = await userLogin(username, password);
      log.info('logged-in user:', loginUser);
      return cb(null, loginUser);
  }
);

const config = (passport) => {
  log.info(`use ${strategy} authentication strategy`);

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

module.exports = config;
