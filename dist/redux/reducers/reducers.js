'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = require('../actions');

var startState = {
  topic: '',
  startYr: '',
  endYr: ''
};

var changeSearch = function changeSearch() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : startState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.CHANGE_SEARCH_TERM:
      return _extends({}, state, { topic: action.payload });
    case _actions.CHANGE_START_YEAR:
      return _extends({}, state, { startYr: action.payload });
    case _actions.CHANGE_END_YEAR:
      return _extends({}, state, { endYr: action.payload });
    default:
      return _extends({}, state);
  }
};

exports.default = changeSearch;