'use strict';

const RAX = Symbol('app#rax');
const engine = require('rax-server-renderer');

module.exports = {


  /**
   * react viewEngine
   * @member {Object} Application#viewEngine
   */
  get react() {
    if (!this[RAX]) {
      this[RAX] = engine;
    }
    return this[RAX];
  },
};
