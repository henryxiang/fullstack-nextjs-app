const cookieParser = require('cookie-parser');

/**
 * Enable cookie parser with Express.js
 * 
 * @param {*} server reference to Express.js server
 */
const config = (server) => {
  server.use(cookieParser());
}

module.exports = config;
