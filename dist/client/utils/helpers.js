'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NYTApi = function () {
  function NYTApi() {
    _classCallCheck(this, NYTApi);

    this.API_KEY = process.env.NYT_API;
    this.axios = _axios2.default;
  }

  _createClass(NYTApi, [{
    key: 'runQuery',
    value: function runQuery(topic) {
      var startYr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
      var endYr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2017;

      var searchTerm = topic.trim();
      var startYear = startYr.trim() + '0101';
      var toYear = endYr.trim() + '1231';

      return this.axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
        params: {
          'api-key': this.API_KEY,
          q: searchTerm,
          begin_date: startYear,
          end_date: toYear
        }
      });
    }
  }, {
    key: 'saveArticle',
    value: function saveArticle(title, url) {
      var newArticle = {
        title: title,
        date: new Date(),
        url: url
      };

      return this.axios.post('/api/saved', newArticle);
    }
  }, {
    key: 'getSaved',
    value: function getSaved() {
      return this.axios.get('/api/saved');
    }
  }, {
    key: 'delete',
    value: function _delete(id) {
      return this.axios.delete('/api/saved', { params: { id: id } });
    }
  }]);

  return NYTApi;
}();

exports.default = NYTApi;