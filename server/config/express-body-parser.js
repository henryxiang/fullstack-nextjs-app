const bodyParser = require('body-parser');

/**
 * Enable body parser with Express.js
 * 
 * @param {*} server reference to Express.js server
 */
const config = (server) => {
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
}

module.exports = config;
