'use strict';

const path = require('path');
const Rax = require('rax');
const renderer = require('rax-server-renderer');
const RENDER = Symbol('RaxView#_render');

let babelRegister;

module.exports = class RaxView {

  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
    this.config = ctx.app.config.rax;

    if (!babelRegister) {
      babelRegister = require('babel-register');
      babelRegister({
        "presets": ["rax", "es2015"]
      })
    }
  }

  [RENDER](filename, locals, config) {
    return new Promise((resolve, reject) => {
      let html = '<!DOCTYPE html>';
      try {
        const component = require(name);
        html += renderer.renderToString(Rax.createElement(component.default || component, locals || {}));
        resolve(html);
      } catch (ex) {
        reject(ex);
      }
    });
  }


  * render(filename, locals, viewOptions) {
    const config = Object.assign({}, this.config, viewOptions, { filename });
    return yield this[RENDER](filename, locals, config);
  }

  renderString(component, locals, viewOptions) {
    const config = Object.assign({}, this.config, viewOptions, { cache: null });
    return new Promise((resolve, reject) => {
      try {
        html += renderer.renderToString(Rax.createElement(component, locals || {}));
        resolve(html);
      } catch (ex) {
        reject(ex);
      }
    });
  }

}
