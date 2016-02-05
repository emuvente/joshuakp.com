var alt = require('../alt');
var PostActions = require('../actions/PostActions');

class PostStore {
	constructor() {
		this.posts = [];
		this.currentPost = null;
		this.errorMessage = null;

		this.bindListeners({
			handleLoadAllPosts: PostActions.LOAD_ALL_POSTS,
			handleLoadSinglePost: PostActions.LOAD_SINGLE_POST,
			handleLoadingFailed: PostActions.LOADING_FAILED,
			updateCurrentPost: PostActions.UPDATE_CURRENT_POST,
			updatePosts:  PostActions.UPDATE_POSTS
		});
	}

	handleLoadAllPosts() {
		this.posts = [];
		this.errorMessage = null;
	}

	handleLoadSinglePost() {
		this.currentPost = null;
		this.errorMessage = null;
	}

	handleLoadingFailed(error) {
		this.errorMessage = error;
	}

	updateCurrentPost(post) {
		this.currentPost = post;
	}

	updatePosts(posts) {
		this.posts = posts;
	}
}

module.exports = alt.createStore(PostStore, 'PostStore');
