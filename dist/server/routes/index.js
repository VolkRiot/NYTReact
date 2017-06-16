'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _article = require('./article.routes');

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.use('/api', _article2.default);
};