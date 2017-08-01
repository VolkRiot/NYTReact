'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Articles = require('../models/Articles');

var _Articles2 = _interopRequireDefault(_Articles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _express2.default.Router();

Router.get('/saved', function (req, res) {
  _Articles2.default.find({}).exec(function (err, doc) {
    if (err) {
      res.status(500).send('Error while retrieving your durned Articles');
    } else {
      res.status(200).send(doc);
    }
  });
});

Router.post('/saved', function (req, res) {
  var io = req.app.get('socketio');
  var newArticle = new _Articles2.default(req.body);
  newArticle.save(function (err) {
    if (err) {
      res.status(500).send('Error happened while saving your article');
    } else {
      io.emit('saved_articles_updated');
      res.status(200).send({ success: true });
    }
  });
});

Router.delete('/saved', function (req, res) {
  var io = req.app.get('socketio');
  _Articles2.default.findByIdAndRemove(req.query.id).then(function (resp, err) {
    if (err) {
      res.status(500).send('Failed to remove this record');
    } else {
      io.emit('saved_articles_updated');
      res.status(200).send({ success: true });
    }
  });
});

exports.default = Router;