"use strict";

const React = require('react');
const ReactServer = require('react-dom/server');
const Router = require('react-router');
const Iso = require('iso');
const routes = require('../src/routes.jsx');
const alt = require('../src/alt.js');

// render response with React
module.exports = function(app) {
    app.use(function (req, res, next) {
        alt.bootstrap(JSON.stringify(res.locals.data || {}));
        const iso = new Iso();

        Router.match({routes, location: req.url}, function(error, redirect, props) {
            if(error) {
                next(error);
            }
            else if(props) {
                const content = ReactServer.renderToString(React.createElement(Router.RoutingContext, props));
                iso.add(content, alt.flush());
                res.render('index',{content:iso.render()});
            }
            else {
                const err = new Error(`404: ${req.url}`);
                err.status = 404;
                return next(err);
            }
        });
    });
};
