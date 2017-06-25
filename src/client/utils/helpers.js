import axios from 'axios';

const NYTApi = () => {
  const API_KEY = process.env.NYT_API || '3dbfbf1bb1034c4bb5e8901725645c29';

  const runQuery = (topic, startYr = 2000, endYr = 2017) => {
    const searchTerm = topic.trim();
    const startYear = `${startYr.trim()}0101`;
    const toYear = `${endYr.trim()}1231`;

    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        'api-key': API_KEY,
        q: searchTerm,
        begin_date: startYear,
        end_date: toYear,
      },
    });
  };

  const saveArticle = (title, url) => {
    const newArticle = {
      title,
      date: new Date(),
      url,
    };

    return axios.post('/api/saved', newArticle);
  };

  const getSaved = () =>
    axios.get('/api/saved');


  const deleteArticle = id =>
    axios.delete('/api/saved', { params: { id } });

  return { runQuery, saveArticle, getSaved, deleteArticle };
};

export default NYTApi;
