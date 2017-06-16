const renderApp = title =>
  `<!doctype html>
<html>
  <head>
    <title>${title}</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/slate/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-RpX8okQqCyUNG7PlOYNybyJXYTtGQH+7rIKiVvg1DLg6jahLEk47VvpUyS+E2/uJ"
    crossorigin="anonymous">
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
  <div id="app">
  </div>
    <script
    src="https://code.jquery.com/jquery-3.2.1.min.js"
    integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
    crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
    integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
    crossorigin="anonymous"></script>
    <script src="${process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000/public/'}js/bundle.js" ></script>
  </body>
</html>
`;

export default renderApp;
