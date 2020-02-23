const cas = require('./cas');
const local = require('./local');

module.exports = {
  cas: cas.config,
  local,
};
