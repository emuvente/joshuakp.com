var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var history = require('history/lib/createBrowserHistory')();
var PostListView = require('./components/PostListView.jsx');
var SinglePostView = require('./components/SinglePostView.jsx');
var App = require('./components/App.jsx');

var routes = (
    <Router history={history}>
        <Route path="/" component={App}>
            <Route path="/" component={PostListView}/>
            <Route path="/post/:id" component={SinglePostView} />
        </Route>
    </Router>
);

module.exports = routes;
