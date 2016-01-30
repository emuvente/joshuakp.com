var React = require('react');
var History = require('react-router').History;
var PostActions = require('../actions/PostActions');

var Header = React.createClass({

    mixins: [History],

    showAllPosts: function(e) {
        e.preventDefault();
        PostActions.loadAllPosts(() => {
            this.history.pushState(null, '/');
        });
    },

    render: function() {
        return (
            <header className="row">
                <h1><a href="#" onClick={this.showAllPosts}>Joshuakp.com</a></h1>
            </header>
        );
    }

});

module.exports = Header;
