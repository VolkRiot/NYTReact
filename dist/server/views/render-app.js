"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var renderApp = function renderApp(title) {
  return "<!doctype html>\n<html>\n  <head>\n    <title>" + title + "</title>\n    <link href=\"https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/slate/bootstrap.min.css\"\n    rel=\"stylesheet\"\n    integrity=\"sha384-RpX8okQqCyUNG7PlOYNybyJXYTtGQH+7rIKiVvg1DLg6jahLEk47VvpUyS+E2/uJ\"\n    crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"/css/style.css\">\n  </head>\n  <body>\n  <div id=\"app\">\n  </div>\n    <script\n    src=\"https://code.jquery.com/jquery-3.2.1.min.js\"\n    integrity=\"sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=\"\n    crossorigin=\"anonymous\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"\n    integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\"\n    crossorigin=\"anonymous\"></script>\n    <script src=\"js/bundle.js\"></script>\n  </body>\n</html>\n";
};

exports.default = renderApp;