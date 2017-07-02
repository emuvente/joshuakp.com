"use strict";

const routes = require('./www/routes');
const renderer = require('./www/renderer');

module.exports = function(app) {
	routes(app);
	renderer(app);
};
