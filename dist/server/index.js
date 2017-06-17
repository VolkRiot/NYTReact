'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Articles = require('./models/Articles');

var _Articles2 = _interopRequireDefault(_Articles);

var _renderApp = require('./views/render-app');

var _renderApp2 = _interopRequireDefault(_renderApp);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console*/
_mongoose2.default.Promise = Promise;

var PORT = process.env.PORT || '8080';

// Load Express and Socket.IO + events
var app = (0, _express2.default)();
var http = (0, _http.Server)(app);
var io = require('socket.io')(http);

io.on('connection', function (socket) {
  console.log('a user connected');

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });

  socket.on('new_saved', function () {
    _Articles2.default.find({}).exec(function (err, doc) {
      if (!err) {
        io.emit('update_saved', doc);
      }
    });
  });
});

if (process.env.MONGODB_URI) {
  _mongoose2.default.connect(process.env.MONGODB_URI);
} else {
  _mongoose2.default.connect('mongodb://localhost/nytreact');
}

var db = _mongoose2.default.connection;

// Show any mongoose errors
db.on('error', function (error) {
  console.log('Mongoose Error: ', error);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', function () {
  console.log('Mongoose connection successful.');
});

// General Middle Ware inventory
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.text());
app.use(_bodyParser2.default.json({ type: 'application/vnd.api+json' }));

// Static Routes
app.use(_express2.default.static(_path2.default.join(__dirname, '../../public')));

// Define Additional Routes
(0, _routes2.default)(app);

// Main render Route
app.get('*', function (req, res) {
  res.send((0, _renderApp2.default)('NYTReact'));
});

process.on('SIGINT', function () {
  _mongoose2.default.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

http.listen(PORT, function () {
  console.log('Server started and listening on port: ' + PORT + '. Run and keep process "yarn\n    dev:wds" running in seperate terminal');
});