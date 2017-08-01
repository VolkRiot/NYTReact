'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Query = require('./search/Query');

var _Query2 = _interopRequireDefault(_Query);

var _Results = require('./search/Results');

var _Results2 = _interopRequireDefault(_Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/forbid-prop-types */
function Search(props) {
  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-lg-12' },
        _react2.default.createElement(_Query2.default, { search: props.currentParams, actions: props.actions })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-md-12' },
        _react2.default.createElement(_Results2.default, { results: props.currentResults, actions: props.actions })
      )
    )
  );
}

Search.propTypes = {
  currentParams: _propTypes2.default.object.isRequired,
  actions: _propTypes2.default.object.isRequired,
  currentResults: _propTypes2.default.array.isRequired
};

exports.default = Search;