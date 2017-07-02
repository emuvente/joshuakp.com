require("babel-polyfill");

var Iso = require('iso');
var Router = require('react-router').Router;
var React = require('react');
var ReactDOM = require('react-dom');
var history = require('history/lib/createBrowserHistory')();
var routes = require('./routes.jsx');
var alt = require('./alt');

window.onload = function(){
	Iso.bootstrap(function (state, meta, container) {
		alt.bootstrap(state);
		ReactDOM.render(<Router history={history}>{routes}</Router>, container);
	});
};
