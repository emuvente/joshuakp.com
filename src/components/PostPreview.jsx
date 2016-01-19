var React = require('react');
var PostActions = require('../actions/PostActions');

var PostPreview = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    loadPost: (e) => {
        e.preventDefault();
        PostActions.loadSinglePost(this.props.post.id, () => {
           this.context.router.transitionTo(`/post/${this.props.post.id}/${self.props.post.slug}`);
        });
    },

    render: () => {
        return (
            <a href="#" className="single-post" onClick={this.loadPost}>
                <div className="post-title">{this.props.post.title}</div>
                <div className="author-details"><img src={this.props.post.author.photo} className="author-photo"/><span className="author-name">{this.props.post.author.name}</span></div>
            </a>
        );
    }

});

module.exports = PostPreview;
