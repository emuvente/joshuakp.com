"use strict";

// simple production error handler
// no stacktraces leaked to user
module.exports = function(app) {
    app.use(function(err, req, res, next) {
        if(!err.status || err.status !== 404){
            err.status = 500;
        }

        console.log(err);
        const stack = err.stack.split('\n');
        for(let key in stack) {
            console.log(stack[key]);
        }
        res.status(err.status);

        res.render('index',{content:'Error '+err.status});
    });
};
