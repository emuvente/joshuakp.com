"use strict";

const cors = require('cors');
const muse = require('./muse');

const cors_options = {
    methods: ['GET']
};

module.exports = function(app) {
    app.get('/api/posts', cors(cors_options), function(req, res) {
        res.json(muse.getPosts());
    });

    app.get('/api/post/:post', cors(cors_options), function(req, res, next) {
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
