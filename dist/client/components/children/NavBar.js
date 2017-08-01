'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactBootstrap.Navbar,
    null,
    _react2.default.createElement(
      _reactBootstrap.Navbar.Header,
      null,
      _react2.default.createElement(
        _reactBootstrap.Navbar.Brand,
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/' },
          'NYTReact'
        )
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.Nav,
      null,
      _react2.default.createElement(
        _reactBootstrap.NavItem,
        { eventKey: 1, href: '/savedview' },
        'Saved Items'
      )
    )
  );
};