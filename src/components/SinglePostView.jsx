var React = require('react');
var PostStore = require('../stores/PostStore');
var moment = require('moment');

var SinglePostView = React.createClass({

	componentDidMount: function() {
		PostStore.listen(this.onChange);
	},

	componentWillUnmount: function() {
		PostStore.unlisten(this.onChange);
	},

	onChange: function(state) {
		this.setState(state);
	},

	getInitialState: function() {
		return PostStore.getState();
	},

	render: function() {
		let posted = moment(this.state.currentPost.date).format('MMMM Do, YYYY');

		return (
			<article className="full-post row">
				<h1 className="post-title">{this.state.currentPost.title}</h1>
				<p className="post-date">Posted on {posted}</p>
				<div className="post-content" dangerouslySetInnerHTML={{__html: this.state.currentPost.content}} />
			</article>
		);
	}

});

module.exports = SinglePostView;
