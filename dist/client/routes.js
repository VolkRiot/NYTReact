'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _index = require('./index');

var _Main = require('./components/Main');

var _Main2 = _interopRequireDefault(_Main);

var _SavedSingleView = require('./components/SavedSingleView');

var _SavedSingleView2 = _interopRequireDefault(_SavedSingleView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouterRedux.ConnectedRouter,
    { history: _index.history },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: _Main2.default }),
      _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/savedview', render: _SavedSingleView2.default })
    )
  );
};

exports.default = Routes;