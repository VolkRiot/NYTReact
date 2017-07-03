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

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Search = require('./children/Search');

var _Search2 = _interopRequireDefault(_Search);

var _Saved = require('./children/Saved');

var _Saved2 = _interopRequireDefault(_Saved);

var _actions = require('../../redux/actions');

var Actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/forbid-prop-types */


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
      var _this2 = this;

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
        _react2.default.createElement(_Search2.default, {
          changeSearch: this.props.actions.changeTerm,
          currentParams: this.props.search,
          currentResults: this.props.results,
          actions: this.props.actions,
          socket: socket
        }),
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
                  return _react2.default.createElement(_Saved2.default, {
                    socket: socket,
                    actions: _this2.props.actions,
                    saved: _this2.props.saved
                  });
                }
              })
            )
          )
        )
      );
    }
  }]);

  return Main;
}(_react.Component);

Main.propTypes = {
  actions: _propTypes2.default.object.isRequired,
  changeTerm: _propTypes2.default.func.isRequired,
  search: _propTypes2.default.object.isRequired,
  saved: _propTypes2.default.array.isRequired,
  results: _propTypes2.default.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    search: state.search,
    results: state.results,
    saved: state.saved
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(Actions, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Main);