import express from 'express';
import Article from '../models/Articles';

const Router = express.Router();

Router.get('/saved', (req, res) => {
  Article.find({}).exec((err, doc) => {
    if (err) {
      res.status(500).send('Error while retrieving your durned Articles');
    } else {
      res.status(200).send(doc);
    }
  });
});

Router.post('/saved', (req, res) => {
  const io = req.app.get('socketio');
  const newArticle = new Article(req.body);
  newArticle.save((err) => {
    if (err) {
      res.status(500).send('Error happened while saving your article');
    } else {
      io.emit('saved_articles_updated');
      res.status(200).send({ success: true });
    }
  });
});

Router.delete('/saved', (req, res) => {
  const io = req.app.get('socketio');
  Article.findByIdAndRemove(req.query.id).then((resp, err) => {
    if (err) {
      res.status(500).send('Failed to remove this record');
    } else {
      io.emit('saved_articles_updated');
      res.status(200).send({ success: true });
    }
  });
});

export default Router;
