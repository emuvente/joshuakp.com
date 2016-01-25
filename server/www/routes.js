"use strict";

const muse = require('../muse');

// setup React routes
module.exports = function(app) {
    app.get('/', function(req, res, next) {
        res.locals.data = { "PostStore" : { "posts" : muse.getPosts() } };
        next();
    });

    muse.addRoute('/post/:post', function(req, res, next) {
        const post = muse.getPost(req.params.post);
        if(post) {
            res.locals.data = { "PostStore" : { "currentPost" : post } };
        }
        next();
    });
};
