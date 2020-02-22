const session = require('express-session');

const sessionConfig = {
  secret: 'session!secret',
  resave: false,
  saveUninitialized: false
};

const applyConfig = (server) => {
  server.use(session(sessionConfig));
}

module.exports = applyConfig;
