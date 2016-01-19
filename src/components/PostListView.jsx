var React = require('react');
var PostStore = require('../stores/PostStore');
var PostPreview = require('./PostPreview.jsx');

var PostListView = React.createClass({

    componentDidMount() {
        PostStore.listen(this.onChange);
    },

    componentWillUnmount() {
        PostStore.unlisten(this.onChange);
    },

    onChange(state) {
        this.setState(state);
    },

    getInitialState() {
        return PostStore.getState();
    },

    render() {
        const posts = this.state.posts.map((post) => {
           return (
               <PostPreview key={post.slug} post={post} />
           );
        });
        return (
            <div>
                {posts}
            </div>
        );
    }

});

module.exports = PostListView;
