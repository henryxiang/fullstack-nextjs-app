const cookieParser = require('cookie-parser');

const applyConfig = (server) => {
  server.use(cookieParser());
}

module.exports = applyConfig;
