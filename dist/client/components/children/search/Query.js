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


var Query = function (_Component) {
  _inherits(Query, _Component);

  function Query(props) {
    _classCallCheck(this, Query);

    var _this = _possibleConstructorReturn(this, (Query.__proto__ || Object.getPrototypeOf(Query)).call(this, props));

    _this.handleChangeSearch = _this.handleChangeSearch.bind(_this);
    _this.handleChangeStartYr = _this.handleChangeStartYr.bind(_this);
    _this.handleChangeEndYr = _this.handleChangeEndYr.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Query, [{
    key: 'handleChangeSearch',
    value: function handleChangeSearch(e) {
      this.props.actions.changeTerm(e.target.value);
    }
  }, {
    key: 'handleChangeStartYr',
    value: function handleChangeStartYr(e) {
      this.props.actions.changeStartYr(e.target.value);
    }
  }, {
    key: 'handleChangeEndYr',
    value: function handleChangeEndYr(e) {
      this.props.actions.changeEndYr(e.target.value);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      this.props.actions.requestArticles(this.props.search);
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
            { autoComplete: 'on' },
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
                value: this.props.search.topic,
                className: 'form-control ',
                id: 'topic',
                onChange: this.handleChangeSearch
              }),
              _react2.default.createElement(
                'h4',
                { className: '' },
                'Start Year (Required)'
              ),
              _react2.default.createElement('input', {
                value: this.props.search.startYr,
                className: 'form-control ',
                id: 'startYr',
                onChange: this.handleChangeStartYr,
                required: true
              }),
              _react2.default.createElement(
                'h4',
                { className: '' },
                'End Year (Required)'
              ),
              _react2.default.createElement('input', {
                value: this.props.search.endYr,
                className: 'form-control',
                type: 'text',
                id: 'endYr',
                onChange: this.handleChangeEndYr,
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
  actions: _propTypes2.default.object.isRequired,
  search: _propTypes2.default.object.isRequired
};

exports.default = Query;