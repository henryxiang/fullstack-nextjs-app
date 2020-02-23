// const winston = require('winston');
// const expressWinston = require('express-winston');

// const config = (server) => {
//   const logger = expressWinston.logger({
//     transports: [new winston.transports.Console()],
//     format: winston.format.combine(
//       winston.format.colorize(),
//       winston.format.json()
//     ),
//   })
//   server.use(logger);
// }
const morgan = require('morgan')

const config = (server) => {
  server.use(morgan('dev'));
}

module.exports = config;
