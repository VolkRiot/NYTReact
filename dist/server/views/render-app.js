'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var renderApp = function renderApp(title) {
  return '<!doctype html>\n<html>\n  <head>\n    <title>' + title + '</title>\n    <link rel="stylesheet" href="/css//bootstrap.min.css">\n  </head>\n  <body>\n  <div id="app">\n  </div>\n    <script src="' + (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000/public/') + 'js/bundle.js" ></script>\n      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>\n  </body>\n</html>\n';
};

exports.default = renderApp;