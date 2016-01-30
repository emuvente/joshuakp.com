var React = require('react');
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

var App = React.createClass({

    render: function() {
        return (
            <div className="body-container">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }

});

module.exports = App;
