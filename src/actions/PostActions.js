var alt = require('../alt');
var request = require('superagent');

class PostActions {
    loadAllPosts(cb){
        var self = this;
        request.get('/api/posts',function(err,response){
            self.actions.updatePosts(response.body);
            if(cb){
                cb();
            }
        });
    }

    loadSinglePost(id,cb){
        var self = this;
        request.get('/api/post/'+id,function(err,response){
            self.actions.updateCurrentPost(response.body);
            if(cb){
                cb();
            }
        });
    }

    updatePosts(posts){
        this.dispatch(posts);
    }

    updateCurrentPost(post){
        this.dispatch(post);
    }
}


module.exports = alt.createActions(PostActions);
