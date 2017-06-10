const renderApp = title =>
  `<!doctype html>
<html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
    <div class="app"></div>
    <script src="http://localhost:/public/bundle.js"></script>
  </body>
</html>
`;

export default renderApp;
