var React = require('react');

var Header = React.createClass({

	render: function() {
		let year = new Date().getFullYear();

		return (
			<footer className="row">
				Copyright &copy; {year} Joshua Kiwiet-Pantaleoni
			</footer>
		);
	}

});

module.exports = Header;
