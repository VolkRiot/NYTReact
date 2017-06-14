import express from 'express';
import Article from '../models/Articles';

const Router = express.Router();

Router.get('/saved', (req, res) => {
  Article.find({}).exec((err, doc) => {
    if (err) res.status(500).send('Error while retrieving your durned Articles');
    res.send(doc);
  });
});

Router.post('/saved', (req, res) => {
  const newArticle = new Article(req.body)
  newArticle.save((err, doc) => {
    if (err) res.status(500).send('Error happended while saving your article');
  })
});

Router.delete('/saved', (req, res) => {
  // (delete) - your components will use this to delete a saved article in the database
});

export default Router;
