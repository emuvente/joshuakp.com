var Iso = require('iso');
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./routes.jsx');
var alt = require('./alt');

window.onload = function(){
    Iso.bootstrap(function (state, meta, container) {
        alt.bootstrap(state);
        ReactDOM.render(routes, container);
    });
};
