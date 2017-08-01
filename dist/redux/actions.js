'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveNewArticle = exports.deleteSaved = exports.getSaved = exports.requestArticles = exports.changeEndYr = exports.changeStartYr = exports.changeTerm = exports.SAVE_NEW = exports.DELETE_ONE_SAVED = exports.GET_SAVED = exports.REQUEST_ARTICLES = exports.CHANGE_END_YEAR = exports.CHANGE_START_YEAR = exports.CHANGE_SEARCH_TERM = undefined;

var _helpers = require('../client/utils/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHANGE_SEARCH_TERM = exports.CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM';
var CHANGE_START_YEAR = exports.CHANGE_START_YEAR = 'CHANGE_START_YEAR';
var CHANGE_END_YEAR = exports.CHANGE_END_YEAR = 'CHANGE_END_YEAR';
var REQUEST_ARTICLES = exports.REQUEST_ARTICLES = 'REQUEST_ARTICLES';
var GET_SAVED = exports.GET_SAVED = 'GET_SAVED';
var DELETE_ONE_SAVED = exports.DELETE_ONE_SAVED = 'DELETE_ONE_SAVED';
var SAVE_NEW = exports.SAVE_NEW = 'SAVE_NEW';

var ApiHelper = new _helpers2.default();

var changeTerm = exports.changeTerm = function changeTerm() {
  var term = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    type: CHANGE_SEARCH_TERM,
    payload: term
  };
};

var changeStartYr = exports.changeStartYr = function changeStartYr() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    type: CHANGE_START_YEAR,
    payload: year
  };
};

var changeEndYr = exports.changeEndYr = function changeEndYr() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    type: CHANGE_END_YEAR,
    payload: year
  };
};

var requestArticles = exports.requestArticles = function requestArticles(_ref) {
  var topic = _ref.topic,
      startYr = _ref.startYr,
      endYr = _ref.endYr;
  return function (dispatch) {
    ApiHelper.runQuery(topic, startYr, endYr).then(function (resp) {
      dispatch({
        type: REQUEST_ARTICLES,
        payload: resp.data.response.docs
      });
    });
  };
};

var getSaved = exports.getSaved = function getSaved() {
  return function (dispatch) {
    ApiHelper.getSaved().then(function (resp) {
      dispatch({
        type: GET_SAVED,
        payload: resp.data
      });
    });
  };
};

var deleteSaved = exports.deleteSaved = function deleteSaved(id) {
  return function (dispatch) {
    ApiHelper.deleteArticle(id).then(function () {
      return ApiHelper.getSaved().then(function (answ) {
        dispatch({
          type: DELETE_ONE_SAVED,
          payload: answ.data
        });
      });
    });
  };
};

var saveNewArticle = exports.saveNewArticle = function saveNewArticle(headline, url) {
  return function (dispatch) {
    ApiHelper.saveArticle(headline, url).then(function () {
      ApiHelper.getSaved().then(function (answ) {
        dispatch({
          type: SAVE_NEW,
          payload: answ.data
        });
      });
    });
  };
};