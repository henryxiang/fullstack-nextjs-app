const fs = require('fs');
const minimist = require('minimist');
const stripJsonComments = require('strip-json-comments');
const { constantCase } = require('change-case');
const { defaultConfig } = require('./default-config');
const getLogger = require('../utils/log-factory');

const log = getLogger('app-config');

let appConfig = { ...defaultConfig };

const configFiles = [];

// Config file can be specified by an environment variable
const APP_NAME = constantCase(defaultConfig.appName);
if (process.env[`${APP_NAME}_CONFIG`]) {
  configFiles.push(process.env[`${APP_NAME}_CONFIG`]);
}

// Config file name can be passed in via command argument `--config`
const args = minimist(process.argv.slice(2));
if (args.config) {
  configFiles.push(args.config);
}

for (const configFile of configFiles) {
  log.info(`config file: ${configFile}`)
  const json = fs.readFileSync(configFile, 'utf8')
  appConfig = { ...appConfig, ...JSON.parse(stripJsonComments(json)) };
}

module.exports = appConfig;
