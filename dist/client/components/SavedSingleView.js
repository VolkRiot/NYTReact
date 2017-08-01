'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _NavBar = require('./children/NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _Saved = require('../components/children/Saved');

var _Saved2 = _interopRequireDefault(_Saved);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_NavBar2.default, null),
    _react2.default.createElement(
      _reactBootstrap.Grid,
      null,
      _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { md: 12 },
          _react2.default.createElement(_Saved2.default, null)
        )
      )
    )
  );
};