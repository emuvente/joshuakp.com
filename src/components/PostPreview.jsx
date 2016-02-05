var React = require('react');
var History = require('react-router').History;
var PostActions = require('../actions/PostActions');

var PostPreview = React.createClass({

	mixins: [History],

	loadPost: function(e) {
		e.preventDefault();
		PostActions.loadSinglePost(this.props.post.slug, () => {
			this.history.pushState(null, `/post/${this.props.post.slug}`);
		});
	},

	render: function() {
		return (
			<a href={this.props.post.url} className="single-post" onClick={this.loadPost}>
				<div className="post-title">{this.props.post.title}</div>
				<div className="post=preview">{this.props.post.description}</div>
			</a>
		);
	}

});

module.exports = PostPreview;
