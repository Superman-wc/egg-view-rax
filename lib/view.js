'use strict';

const path = require('path');
const Rax = require('rax');
const renderer = require('rax-server-renderer');

let babelRegister;

class View {

    constructor(ctx) {
        this.ctx = ctx;
        this.app = ctx.app;
        this.config = ctx.app.config.view;

        if(!babelRegister){
            babelRegister = require('babel-register');
            babelRegister({
                "presets": ["rax", "es2015"]
            })
        }
    }

    render(name, locals) {
        return new Promise((resolve, reject) => {
            let html = '<!DOCTYPE html>';
            try {
                const component = require(name);
                html += renderer.renderToString(Rax.createElement(component.default || component, locals || {}));
            } catch (error) {
                reject(error);
            }

            resolve(html);
        });
    }

    renderString() {
        return Promise.reject('not implemented yet!');
    }

}

module.exports = View;
