import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="jumbotron text-center">
          <h1 className="display-3">NYT React App</h1>
          <p className="lead">
            This is a simple New York Times React Application
          </p>
          <p>
            Search for Articles in the NYT Api and save them to a Mongo database
          </p>
        </div>
      </div>
    );
  }
}

export default Main;
