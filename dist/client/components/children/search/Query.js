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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Query = function (_Component) {
  _inherits(Query, _Component);

  function Query(props) {
    _classCallCheck(this, Query);

    var _this = _possibleConstructorReturn(this, (Query.__proto__ || Object.getPrototypeOf(Query)).call(this, props));

    _this.state = { topic: '', startYr: '', endYr: '' };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Query, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.id, e.target.value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      this.props.performSearch(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'panel panel-default' },
        _react2.default.createElement(
          'div',
          { className: 'panel-heading' },
          _react2.default.createElement(
            'h3',
            { className: 'panel-title text-center' },
            'Search'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(
            'form',
            null,
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'h4',
                { className: '' },
                'Topic'
              ),
              _react2.default.createElement('input', {
                type: 'text',
                value: this.state.topic,
                className: 'form-control ',
                id: 'topic',
                onChange: this.handleChange
              }),
              _react2.default.createElement(
                'h4',
                { className: '' },
                'Start Year (Required)'
              ),
              _react2.default.createElement('input', {
                value: this.state.startYr,
                className: 'form-control ',
                id: 'startYr',
                onChange: this.handleChange,
                required: true
              }),
              _react2.default.createElement(
                'h4',
                { className: '' },
                'End Year (Required)'
              ),
              _react2.default.createElement('input', {
                value: this.state.endYr,
                className: 'form-control ',
                id: 'endYr',
                onChange: this.handleChange,
                required: true
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'pull-right' },
              _react2.default.createElement(
                'button',
                { type: 'button', className: 'btn btn-primary', onClick: this.handleSubmit },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Submit'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Query;
}(_react.Component);

Query.propTypes = {
  performSearch: _propTypes2.default.func.isRequired
};

exports.default = Query;