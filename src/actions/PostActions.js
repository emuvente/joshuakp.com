var alt = require('../alt');
var request = require('superagent');
var PostSource = require('../sources/PostSource.js');

class PostActions {
    loadAllPosts(cb) {
        return (dispatch) => {
            // we dispatch an event here so we can have "loading" state.
            dispatch();

            PostSource.fetchPosts().then((posts) => {
                this.updatePosts(posts);
                if(cb) cb();
            }).catch((error) => {
                this.loadingFailed(error);
            });
        };
    }

    loadSinglePost(slug,cb) {
        return (dispatch) => {
            // we dispatch an event here so we can have "loading" state.
            dispatch();

            PostSource.fetchPost(slug).then((post) => {
                this.updateCurrentPost(post);
                if(cb) cb();
            }).catch((error) => {
                this.loadingFailed(error);
            });
        };
    }

    loadingFailed(error) {
        return error;
    }

    updatePosts(posts) {
        return posts;
    }

    updateCurrentPost(post) {
        return post;
    }
}

module.exports = alt.createActions(PostActions);
