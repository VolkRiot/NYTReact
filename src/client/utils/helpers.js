import axios from 'axios';

class NYTApi extends axios {
  constructor(apiKey) {
    super();
    this.API_KEY = apiKey;
  }

  runQuery(term, start, end) {
    const searchTerm = term.trim();
    const startYear = `${start.trim()}0101`;
    const toYear = `${end.trim()}1231`;

    return this.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        'api-key': this.API_KEY,
        q: searchTerm,
        begin_date: startYear,
        end_date: end,
      },
    }).then(results => results.data.response);
  }
}
