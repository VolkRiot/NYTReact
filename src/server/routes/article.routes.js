import express from 'express';
import Article from '../models/Articles';

const Router = express.Router();

Router.get('/saved', (req, res) => {
  // Call the Api to save a new article
});

Router.post('/saved', (req, res) => {
  // (post) - your components will use this to save an article to the database
});

Router.delete('/saved', (req, res) => {
  // (delete) - your components will use this to delete a saved article in the database
});

export default Router;
