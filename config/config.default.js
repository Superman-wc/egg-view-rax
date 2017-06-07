'use strict';

const path = require('path');

module.exports = appInfo => {
  return {
    rax: {
      root: path.join(appInfo.baseDir, 'app/view'),
    }
  }
};
