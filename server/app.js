"use strict";

const express = require('express');
const session = require('express-session');
const compression = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const muse = require('./muse');
const app = express();

// setup app
app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'copy cat', resave: false, saveUninitialized: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit : '50mb'}));
app.use(cookieParser());
app.use(compression());

// setup Poet
require('./muse')(app, {
    posts: './posts/',
    metaFormat: 'yaml'
});

// setup api
require('./api')(app);

// setup www
require('./www')(app);

// setup error handler
require('./error-handler')(app);

// start the server
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
