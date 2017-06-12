import articles from './article.routes';

export default (app) => {
  app.use('/api', articles);
};
