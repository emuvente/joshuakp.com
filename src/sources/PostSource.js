var request = require('superagent');

var PostSource = {
	fetchPosts: function() {
		return new Promise((resolve, reject) => {
			request.get('/api/posts').end((error, response) => {
				return error ? reject(error) : resolve(response.body);
			});
		});
	},

	fetchPost: function(slug) {
		return new Promise((resolve, reject) => {
			request.get(`/api/post/${slug}`).end((error, response) => {
				return error ? reject(error) : resolve(response.body);
			});
		});
	}
};

module.exports = PostSource;
