"use strict";

const Router = require('react-router');
const React = require('react');
const Alt = require('alt');
const Iso = require('iso');
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routes = {};
const alt = new Alt();
const app = express();

app.set('port', (process.env.PORT || 5000));

// setup Poet
const poet = require('poet')(app, {
    posts: './posts/',
    metaFormat: 'yaml'
});

poet.init().then(function() {
    // poet initialized
});


// setup app
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'copy cat', resave: false, saveUninitialized: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit : '50mb'}));
app.use(cookieParser());


// setup api routes
app.get('/api/posts', function(req, res) {
    res.json(poet.helpers.getPosts());
});

app.get('/api/post/:post', function(req, res, next) {
    const post = poet.helpers.getPost(req.params.post);
    if(post) {
        res.json(post);
    }
    else {
        const err = new Error();
        err.status = 404;
        return next(err);
    }
});


// setup React routes
app.get('/', function(req, res, next) {
    res.locals.data = { "PostStore" : { "posts" : poet.helpers.getPosts() } };
    next();
});

poet.addRoute('post/:post', function(req, res, next) {
    const post = poet.helpers.getPost(req.params.post);
    if(post) {
        res.locals.data = { "PostStore" : { "currentPost" : post } };
    }
    next();
});

// render response with React
app.use(function (req, res) {
    alt.bootstrap(JSON.stringify(res.locals.data || {}));
    const iso = new Iso();

    Router.run(routes, req.url, function (Handler) {
        const content = React.renderToString(React.createElement(Handler));
        iso.add(content, alt.flush());
        res.render('index',{content:iso.render()});
    });
});

// simple production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    if(!err.status || err.status !== 404){
        err.status = 500;
    }

    console.log(err);
    const stack = err.stack.split('\n');
    for(let key in stack) {
        console.log(stack[key]);
    }
    res.status(err.status);

    res.render('index',{content:'Error '+err.status});
});

// start the server
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
