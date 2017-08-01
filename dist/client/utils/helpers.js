'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NYTApi = function NYTApi() {
  var API_KEY = process.env.NYT_API || '3dbfbf1bb1034c4bb5e8901725645c29';

  var runQuery = function runQuery(topic) {
    var startYr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    var endYr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2017;

    var searchTerm = topic.trim();
    var startYear = startYr.trim() + '0101';
    var toYear = endYr.trim() + '1231';

    return _axios2.default.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        'api-key': API_KEY,
        q: searchTerm,
        begin_date: startYear,
        end_date: toYear
      }
    });
  };

  var saveArticle = function saveArticle(title, url) {
    var newArticle = {
      title: title,
      date: new Date(),
      url: url
    };

    return _axios2.default.post('/api/saved', newArticle);
  };

  var getSaved = function getSaved() {
    return _axios2.default.get('/api/saved');
  };

  var deleteArticle = function deleteArticle(id) {
    return _axios2.default.delete('/api/saved', { params: { id: id } });
  };

  return { runQuery: runQuery, saveArticle: saveArticle, getSaved: getSaved, deleteArticle: deleteArticle };
};

exports.default = NYTApi;