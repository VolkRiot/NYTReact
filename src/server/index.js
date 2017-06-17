/* eslint-disable no-console*/
import 'babel-polyfill';
import express from 'express';
import { Server } from 'http';
import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path';
import mongoose from 'mongoose';
import Article from './models/Articles';
import renderApp from './views/render-app';
import routes from './routes';

mongoose.Promise = Promise;

const PORT = process.env.PORT || '8080';

// Load Express and Socket.IO + events
const app = express();
const http = Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('new_saved', () => {
    Article.find({}).exec((err, doc) => {
      if (!err) {
        io.emit('update_saved', doc);
      }
    });
  });
});

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost/nytreact');
}

const db = mongoose.connection;

// Show any mongoose errors
db.on('error', (error) => {
  console.log('Mongoose Error: ', error);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', () => {
  console.log('Mongoose connection successful.');
});

// General Middle Ware inventory
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Static Routes
app.use(express.static(path.join(__dirname, '../../public')));

// Define Additional Routes
routes(app);

// Main render Route
app.get('*', (req, res) => {
  res.send(renderApp('NYTReact'));
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

http.listen(PORT, () => {
  console.log(`Server started and listening on port: ${PORT}. Run and keep process "yarn
    dev:wds" running in seperate terminal`);
});
