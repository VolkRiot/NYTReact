'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = undefined;
exports.configureStore = configureStore;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _tether = require('tether');

var _tether2 = _interopRequireDefault(_tether);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = require('react-hot-loader');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouterRedux = require('react-router-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('../redux/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _socket = require('./socket');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.jQuery = _jquery2.default; /* eslint-disable global-require */

window.Tether = _tether2.default;
require('bootstrap');

var history = exports.history = (0, _createBrowserHistory2.default)();

function configureStore(initialState) {
  var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(history)), window.devToolsExtension ? window.devToolsExtension() : function (f) {
    return f;
  }));
  return store;
}

var store = configureStore();

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

(0, _socket2.default)(store);