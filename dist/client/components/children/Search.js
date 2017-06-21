'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Query = require('./search/Query');

var _Query2 = _interopRequireDefault(_Query);

var _helpers = require('../../utils/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _Results = require('./search/Results');

var _Results2 = _interopRequireDefault(_Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApiHelper = new _helpers2.default();

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      search: {
        topic: '',
        startYr: '',
        endYr: ''
      },
      results: [],
      saved: []
    };

    _this.setSearch = _this.setSearch.bind(_this);
    _this.setSaved = _this.setSaved.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      var newSearch = this.state.search;

      ApiHelper.runQuery(newSearch.topic, newSearch.startYr, newSearch.endYr).then(function (resp) {
        var newArticles = resp.data.response.docs;
        _this2.setState({ results: newArticles });
      }).catch(function (err) {
        // eslint-disable-next-line no-console
        console.log('Error happened', err);
      });
    }
  }, {
    key: 'setSearch',
    value: function setSearch(args) {
      this.setState({ search: args });
    }
  }, {
    key: 'setSaved',
    value: function setSaved(args) {
      this.setState({ saved: args });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-12' },
            _react2.default.createElement(_Query2.default, { performSearch: this.setSearch })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(_Results2.default, {
              results: this.state.results,
              updateSaved: this.setSaved,
              socket: this.props.socket
            })
          )
        )
      );
    }
  }]);

  return Search;
}(_react.Component);

Search.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  socket: _propTypes2.default.object.isRequired
};

exports.default = Search;