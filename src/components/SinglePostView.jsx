var React = require('react');
var PostStore = require('../stores/PostStore');

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
        return (
            <div className="full-post">
                <h1 className="post-title">{this.state.currentPost.title}</h1>
                <div className="post-content" dangerouslySetInnerHTML={{__html: this.state.currentPost.content}} />
            </div>
        );
    }

});

module.exports = SinglePostView;
