'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = require('react-hot-loader');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxPromise = require('redux-promise');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reducers = require('../redux/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable global-require */
var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxPromise2.default), window.devToolsExtension ? window.devToolsExtension() : undefined));

// Hot module reload wrapper
var wrapApp = function wrapApp(AppComponent) {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(AppComponent, null)
    )
  );
};

_reactDom2.default.render(wrapApp(_routes2.default), document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./routes', function () {
    var NextApp = require('./routes').default;
    _reactDom2.default.render(wrapApp(NextApp), document.getElementById('app'));
  });
}