var React = require('react');
var Header = require('./Header.jsx');

var App = React.createClass({

    render: () => {
        return (
            <div className="body-container">
                <Header />
                {this.props.children}
            </div>
        );
    }

});

module.exports = App;
