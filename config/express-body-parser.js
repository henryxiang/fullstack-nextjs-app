const bodyParser = require('body-parser');

const applyConfig = (server) => {
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
}

module.exports = applyConfig;
