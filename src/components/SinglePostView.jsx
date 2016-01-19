var React = require('react');
var PostStore = require('../stores/PostStore');

var SinglePostView = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    componentDidMount: () => {
        PostStore.listen(this.onChange);
    },

    componentWillUnmount: () => {
        PostStore.unlisten(this.onChange);
    },

    onChange: (state) => {
        this.setState(state);
    },

    getInitialState: () => {
        return PostStore.getState();
    },

    render: () => {
        return (
            <div className="full-post">
                <h1 className="post-title">{this.state.currentPost.title}</h1>
                <div className="author-details">
                    <img src={this.state.currentPost.author.photo} className="author-photo"/>
                    <span className="author-name">{this.state.currentPost.author.name}</span>
                </div>
                <div className="post-content">
                    {this.state.currentPost.description}
                </div>
            </div>
        );
    }

});

module.exports = SinglePostView;
