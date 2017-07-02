"use strict";

const compression = require('compression');
const config = require('./config');
const express = require('express');
const path = require('path');

// setup app
const app = express();
app.set('port', config('PORT'));
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());

// setup Poet
require('./server/muse')(app, {
	posts: './posts/',
	metaFormat: 'yaml'
});

// setup api
require('./server/api')(app);

// setup www
require('./server/www')(app);

// setup error handler
require('./server/error-handler')(app);

// start the server
app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
