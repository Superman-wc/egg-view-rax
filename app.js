'use strict';

module.exports = app => {
    app.view.use('rax', require('./lib/view'));
};
