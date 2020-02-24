const winston = require('winston');
require('winston-daily-rotate-file');
const moment = require('moment');
const { defaultConfig } = require('../config/default-config');

const config = defaultConfig;
const env = config.environment;
const appName = config.appName;
const logConfig = config.logger;

const transports = [
  new winston.transports.Console({
    colorize: true,
    prettyPrint: true,
    timestamp: true,
  }),
];

if (logConfig.file.enabled) {
  transports.push(new winston.transports.DailyRotateFile({
    level: logConfig.file.level,
    filename: `${logConfig.file.path}/${appName}-${env}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    prepend: true,
  }));
}

const getLogger = (name) => {
  const { format, createLogger } = winston;
  const { combine, label, timestamp, printf } = format;
  const outputFormat = printf(info => {
    const localTimestamp = moment(info.timestamp).local().format('YYYY-MM-DD HH:mm:ss.SSS');
    const logLevel = info.level.toUpperCase();
    return `[${localTimestamp}] [${logLevel}] ${info.label} - ${info.message}`;
  });
  return createLogger({
    format: combine(
      label({ label: name }),
      timestamp(),
      outputFormat,
    ),
    transports,
  });
};

module.exports = getLogger;
