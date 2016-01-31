const env = require('./env.json');

module.exports = name => process.env[name] || env[name];
