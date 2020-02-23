const session = require('express-session');

const sessionConfig = {
  secret: 'session!secret',
  resave: false,
  saveUninitialized: false
};

/**
 * Enable session with Express.js
 * 
 * @param {*} server reference to Express.js server
 */
const applyConfig = (server) => {
  server.use(session(sessionConfig));
}

module.exports = applyConfig;
