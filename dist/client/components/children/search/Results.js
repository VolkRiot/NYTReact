'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/forbid-prop-types */


var Results = function (_Component) {
  _inherits(Results, _Component);

  function Results(props) {
    _classCallCheck(this, Results);

    var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Results, [{
    key: 'handleClick',
    value: function handleClick(article) {
      this.props.actions.saveNewArticle(article.headline.main, article.web_url);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.results.length === 0) {
        return _react2.default.createElement(
          'div',
          { style: { marginBottom: '1em' } },
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
                  'Search for articles to begin.'
                )
              )
            )
          )
        );
      }

      var articles = this.props.results.map(function (article) {
        return (
          //  eslint-disable-next-line no-underscore-dangle
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
                    article.headline.main
                  )
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'btn-group pull-right' },
                  _react2.default.createElement(
                    'a',
                    { href: article.web_url, target: '_blank', rel: 'noopener noreferrer' },
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
                    'Save'
                  )
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                'Date Published: ',
                article.pub_date
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
              _react2.default.createElement('i', { className: 'fa fa-list-alt' }),
              ' Results'
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

  return Results;
}(_react.Component);

Results.propTypes = {
  results: _propTypes2.default.array.isRequired,
  actions: _propTypes2.default.object.isRequired
};

exports.default = Results;