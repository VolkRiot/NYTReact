import React, { Component } from 'react';
import Query from './search/Query';

class Search extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Query />
        </div>
      </div>
    );
  }
}

export default Search;
