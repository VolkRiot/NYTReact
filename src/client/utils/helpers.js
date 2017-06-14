import axios from 'axios';

class NYTApi {
  constructor() {
    this.API_KEY = '3dbfbf1bb1034c4bb5e8901725645c29'; // '77e2b3f4961e4221abe3128890131cba';
    this.axios = axios;
  }

  runQuery(obj) {
    const searchTerm = obj.term.trim();
    const startYear = `${obj.start.trim()}0101`;
    const toYear = `${obj.end.trim()}1231`;

    return this.axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        'api-key': this.API_KEY,
        q: searchTerm,
        begin_date: startYear,
        end_date: toYear,
      },
    });
  }

  saveArticle(article) {
    const newArticle = {
      title: article.headline.main,
      date: new Date(),
      url: article.web_url,
    };

    return this.axios.post('/api/saved', newArticle);
  }

  getSaved() {
    return this.axios.get('/api/saved');
  }
}

export default NYTApi;
