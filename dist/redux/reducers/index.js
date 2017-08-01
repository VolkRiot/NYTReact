'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _resultsReducer = require('./resultsReducer');

var _resultsReducer2 = _interopRequireDefault(_resultsReducer);

var _savedReducer = require('./savedReducer');

var _savedReducer2 = _interopRequireDefault(_savedReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  search: _reducers2.default,
  results: _resultsReducer2.default,
  saved: _savedReducer2.default,
  router: _reactRouterRedux.routerReducer
});

exports.default = rootReducer;