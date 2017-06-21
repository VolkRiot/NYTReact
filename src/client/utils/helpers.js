import axios from 'axios';

class NYTApi {
  constructor() {
    this.API_KEY = process.env.NYT_API || '3dbfbf1bb1034c4bb5e8901725645c29';
    this.axios = axios;
  }

  runQuery(topic, startYr = 2000, endYr = 2017) {
    const searchTerm = topic.trim();
    const startYear = `${startYr.trim()}0101`;
    const toYear = `${endYr.trim()}1231`;

    return this.axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        'api-key': this.API_KEY,
        q: searchTerm,
        begin_date: startYear,
        end_date: toYear,
      },
    });
  }

  saveArticle(title, url) {
    const newArticle = {
      title,
      date: new Date(),
      url,
    };

    return this.axios.post('/api/saved', newArticle);
  }

  getSaved() {
    return this.axios.get('/api/saved');
  }

  delete(id) {
    return this.axios.delete('/api/saved', { params: { id } });
  }
}

export default NYTApi;
