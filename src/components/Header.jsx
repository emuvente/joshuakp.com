var React = require('react');
var PostActions = require('../actions/PostActions');

var Header = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    showAllPosts: (e) => {
        e.preventDefault();
        console.log(PostActions);
        PostActions.loadAllPosts(() => {
            console.log('cb called');
            this.context.router.transitionTo('postListView');
        });
    },

    render: () => {
        return (
            <div className="header">
                <h1><a href="#" onClick={this.showAllPosts}>React Isomorphic Blog</a></h1>
            </div>
        );
    }

});

module.exports = Header;
