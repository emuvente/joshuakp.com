var alt = require('../alt');
var request = require('superagent');

class PostActions {
    loadAllPosts(cb) {
        request.get('/api/posts', (err,response) => {
            this.updatePosts(response.body);
            if(cb) cb();
        });
    }

    loadSinglePost(id,cb) {
        request.get('/api/post/'+id, (err,response) => {
            this.updateCurrentPost(response.body);
            if(cb) cb();
        });
    }

    updatePosts(posts) { return posts; }

    updateCurrentPost(post) { return post; }
}

module.exports = alt.createActions(PostActions);
