var React = require('react');
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

var App = React.createClass({

	render: function() {
		return (
			<div className="container">
				<div className="main">
					<Header />
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	}

});

module.exports = App;
