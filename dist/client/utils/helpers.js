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

    this.API_KEY = '3dbfbf1bb1034c4bb5e8901725645c29'; // '77e2b3f4961e4221abe3128890131cba';
    this.axios = _axios2.default;
  }

  _createClass(NYTApi, [{
    key: 'runQuery',
    value: function runQuery(obj) {
      var searchTerm = obj.term.trim();
      var startYear = obj.start.trim() + '0101';
      var toYear = obj.end.trim() + '1231';

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
    value: function saveArticle(article) {
      var newArticle = {
        title: article.headline.main,
        date: new Date(),
        url: article.web_url
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