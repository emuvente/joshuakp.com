const env = require('./env.json');

module.exports = name => typeof process.env[name] !== 'undefined' ? process.env[name] : env[name];
