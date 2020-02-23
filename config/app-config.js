const path = require('path');
const rc = require('rc');

const prefix = 'node';
const defaultConfig = {
  baseDir: path.resolve(__dirname, '..'),
  http: {
    context: '',
  },
  auth: {
    strategy: 'local',
    local: {
      loginPath: 'login',
      password: 'test',
    },
    cas: {
      version: 'CAS3.0',
      loginUrl: 'https://ssodev.ucdavis.edu/cas',
      logoutUrl: 'https://ssodev.ucdavis.edu/cas/logout',
    },
  },
};

const appConfig = rc(prefix, defaultConfig);

module.exports = appConfig;
