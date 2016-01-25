"use strict";
/**
 * Muse - a singleton wrapper for Poet
 */

const poet = require('poet');

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

Muse.addRoute = function(...args) {
    assertPoet();
    return poet_instance.addRoute(...args);
};

Muse.getPost = function(...args) {
    assertPoet();
    return poet_instance.helpers.getPost(...args);
};

Muse.getPosts = function(...args) {
    assertPoet();
    return poet_instance.helpers.getPosts(...args);
};

module.exports = Muse;
