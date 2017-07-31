/* eslint-disable no-console*/
import 'babel-polyfill';
import express from 'express';
import { Server } from 'http';
import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path';
import mongoose from 'mongoose';
import renderApp from './views/render-app';
import routes from './routes';
import setUpSocket from './socket';

mongoose.Promise = Promise;

const PORT = process.env.PORT || '8080';

// Load Express and Http Server for Socket
const app = express();
const http = Server(app);

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

// Start Socket connection
setUpSocket(require('socket.io')(http));

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
