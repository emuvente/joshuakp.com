var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var PostListView = require('./components/PostListView.jsx');
var SinglePostView = require('./components/SinglePostView.jsx');
var App = require('./components/App.jsx');

var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={PostListView}/>
		<Route path="/post/:id" component={SinglePostView} />
	</Route>
);

module.exports = routes;
