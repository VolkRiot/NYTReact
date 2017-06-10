const renderApp = title =>
  `<!doctype html>
<html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
    <div id="app"></div>
    <script src="http://localhost:3000/public/js/bundle.js"></script>
  </body>
</html>
`;

export default renderApp;
