'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _Search = require('./children/Search');

var _Search2 = _interopRequireDefault(_Search);

var _Saved = require('./children/Saved');

var _Saved2 = _interopRequireDefault(_Saved);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prefer-stateless-function */


var socket = (0, _socket2.default)();

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'main-container' },
        _react2.default.createElement(
          'div',
          { className: 'jumbotron text-center' },
          _react2.default.createElement(
            'h1',
            { className: 'display-3' },
            'NYT React App'
          ),
          _react2.default.createElement(
            'p',
            { className: 'lead' },
            'This is a simple New York Times React Application'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Search for Articles in the NYT Api and save them to a Mongo database'
          )
        ),
        _react2.default.createElement(_reactRouter.Route, { component: function component() {
            return _react2.default.createElement(_Search2.default, { socket: socket });
          } }),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(_reactRouter.Route, { component: function component() {
                  return _react2.default.createElement(_Saved2.default, { socket: socket });
                } })
            )
          )
        )
      );
    }
  }]);

  return Main;
}(_react.Component);

exports.default = Main;