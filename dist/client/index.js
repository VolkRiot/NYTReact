'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = require('react-hot-loader');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Hot module reload wrapper
/* eslint-disable global-require */
var wrapApp = function wrapApp(AppComponent) {
  return _react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(AppComponent, null)
  );
};

_reactDom2.default.render(wrapApp(_routes2.default), document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./routes', function () {
    var NextApp = require('./routes').default;
    _reactDom2.default.render(wrapApp(NextApp), document.getElementById('app'));
  });
}