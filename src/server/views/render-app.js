const renderApp = title =>
  `<!doctype html>
<html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="/css//bootstrap.min.css">
  </head>
  <body>
  <div id="app">
  </div>
    <script src="${process.env.NODE_ENV === 'production'
      ? ''
      : 'http://localhost:3000/public/'}js/bundle.js" ></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  </body>
</html>
`;

export default renderApp;
