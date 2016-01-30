"use strict";
/**
 * Muse - a singleton wrapper for Poet v2.0.1
 */

const poet = require('poet');
const poet_methods = [
    'addRoute',
    'addTemplate',
    'clearCache',
    'unwatch',
    'watch'
];
const helper_methods = [
    'categoryURL',
    'getCategories',
    'getPageCount',
    'getPost',
    'getPostCount',
    'getPosts',
    'getTags',
    'pageURL',
    'postsWithCategory',
    'postsWithTag',
    'tagURL'
];

let poet_instance;
const assertPoet = function() {
    if(!poet_instance) {
        throw new Error('Poet not initialized');
    }
};

let Muse = function(app, options) {
    poet_instance = poet(app, options);
    return poet_instance.init();
};

for(let i = 0, len = poet_methods.length; i < len; i++) {
    let method = poet_methods[i];
    Muse[method] = (...args) => {
        assertPoet();
        return poet_instance[method](...args);
    };
}

for(let i = 0, len = helper_methods.length; i < len; i++) {
    let method = helper_methods[i];
    Muse[method] = (...args) => {
        assertPoet();
        return poet_instance.helpers[method](...args);
    };
}

module.exports = Muse;
