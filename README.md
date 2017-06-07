# egg-view-rax

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-view-rax.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-view-rax
[download-image]: https://img.shields.io/npm/dm/egg-view-rax.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-view-rax

egg view plugin for [rax].

## Install

```bash
$ npm i egg-view-rax --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.rax = {
  enable: true,
  package: 'egg-view-rax',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.view = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/Superman-wc/egg-view-rax/issues).

## License

[MIT](LICENSE)

[rax]: https://facebook.github.io/rax/