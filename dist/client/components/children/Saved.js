'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('../../../redux/actions');

var Actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/forbid-prop-types */


var Saved = function (_Component) {
  _inherits(Saved, _Component);

  function Saved(props) {
    _classCallCheck(this, Saved);

    var _this = _possibleConstructorReturn(this, (Saved.__proto__ || Object.getPrototypeOf(Saved)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Saved, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // TODO: Not happy with this as a solution for init mount
      // What if id the databse is empty?
      // Should really be an initializing call to the Db to set state.
      if (this.props.saved.length <= 0) {
        this.props.actions.getSaved();
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(article) {
      // eslint-disable-next-line no-underscore-dangle
      this.props.actions.deleteSaved(article._id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.saved.length === 0) {
        return _react2.default.createElement(
          'li',
          { className: 'list-group-item' },
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(
                'em',
                null,
                'Looks like there are no saved Articles yet'
              )
            )
          )
        );
      }

      var articles = this.props.saved.map(function (article) {
        return (
          // eslint-disable-next-line no-underscore-dangle
          _react2.default.createElement(
            'div',
            { key: article._id },
            _react2.default.createElement(
              'li',
              { className: 'list-group-item' },
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  _react2.default.createElement(
                    'em',
                    null,
                    article.title
                  )
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'btn-group pull-right' },
                  _react2.default.createElement(
                    'a',
                    { href: article.url, target: '_blank', rel: 'noopener noreferrer' },
                    _react2.default.createElement(
                      'button',
                      { className: 'btn btn-default ' },
                      'View Article'
                    )
                  ),
                  _react2.default.createElement(
                    'button',
                    { className: 'btn btn-primary', onClick: function onClick() {
                        return _this2.handleClick(article);
                      } },
                    'Delete'
                  )
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                'Date Published: ',
                article.date
              )
            )
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'panel panel-primary' },
        _react2.default.createElement(
          'div',
          { className: 'panel-heading' },
          _react2.default.createElement(
            'h1',
            { className: 'panel-title' },
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement('i', { className: 'fa fa-download', 'aria-hidden': 'true' }),
              ' Saved Articles'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(
            'ul',
            { className: 'list-group' },
            articles
          )
        )
      );
    }
  }]);

  return Saved;
}(_react.Component);

Saved.propTypes = {
  actions: _propTypes2.default.object.isRequired,
  saved: _propTypes2.default.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    saved: state.saved
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(Actions, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Saved);