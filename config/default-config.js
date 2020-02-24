const path = require('path');
const util = require('util');

const defaultConfig = {
  appName: 'demo-app',
  baseDir: path.resolve(__dirname, '..'),
  environment: 'local',
  http: {
    serverBaseUrl: 'http://localhost',
    documentRoot: 'public',
    context: '',
    port: 3000,
    isProxyOn: false,
  },
  auth: {
    strategy: 'cas',
    loginPath: 'login',
    local: {
      password: 'test',
    },
    cas: {
      version: 'CAS3.0',
      loginUrl: 'https://ssodev.ucdavis.edu/cas',
      logoutUrl: 'https://ssodev.ucdavis.edu/cas/logout',
    },
  },
  logger: {
    file: {
      level: 'info',
      path: 'logs',
      enabled: true,
    },
    console: {
      level: 'debug',
      enabled: true,
    },
  },
};

const prettyPrint = () => util.inspect(defaultConfig, false, null);

const toJson = () => JSON.stringify(defaultConfig, null, 2);

const toJinja = () => '';

module.exports = {
  defaultConfig,
  prettyPrint,
  toJson,
  toJinja,
};
