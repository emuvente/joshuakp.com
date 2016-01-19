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
            <a href="#" className="single-post" onClick={this.loadPost}>
                <div className="post-title">{this.props.post.title}</div>
                <div className="post-preview">{this.props.post.preview}</div>
            </a>
        );
    }

});

module.exports = PostPreview;
