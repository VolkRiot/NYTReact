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
    if (err) res.status(500).send('Error while retrieving your durned Articles');
    res.status(200).send(doc);
  });
});

Router.post('/saved', function (req, res) {
  var newArticle = new _Articles2.default(req.body);
  newArticle.save(function (err, doc) {
    if (err) res.status(500).send('Error happended while saving your article');
  });
});

Router.delete('/saved', function (req, res) {
  _Articles2.default.findByIdAndRemove(req.query.id).then(function (resp, err) {
    if (err) res.status(500).send('Failed to remove this record');
    res.status(200).send({ success: true });
  });
});

exports.default = Router;