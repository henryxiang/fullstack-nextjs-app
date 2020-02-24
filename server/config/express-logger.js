const morgan = require('morgan')

const config = (server) => {
  server.use(morgan('dev'));
}

module.exports = config;
