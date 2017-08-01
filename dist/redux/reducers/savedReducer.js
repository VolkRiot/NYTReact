'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getSavedReducer = function getSavedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.GET_SAVED:
      return [].concat(_toConsumableArray(action.payload));
    case _actions.DELETE_ONE_SAVED:
      return [].concat(_toConsumableArray(action.payload));
    case _actions.SAVE_NEW:
      return [].concat(_toConsumableArray(action.payload));
    default:
      return [].concat(_toConsumableArray(state));
  }
};

exports.default = getSavedReducer;