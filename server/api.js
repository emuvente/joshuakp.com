"use strict";

const muse = require('./muse');

module.exports = function(app) {
    app.get('/api/posts', function(req, res) {
        res.json(muse.getPosts());
    });

    app.get('/api/post/:post', function(req, res, next) {
        const post = muse.getPost(req.params.post);
        if(post) {
            res.json(post);
        }
        else {
            const err = new Error();
            err.status = 404;
            return next(err);
        }
    });
};
