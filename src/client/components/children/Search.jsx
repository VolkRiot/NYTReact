import React, { Component } from 'react';
import Query from './search/Query';
import NYTApi from '../../utils/helpers';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { topic: '', startYr: '', endYr: '' };

    this.setSearch = this.setSearch.bind(this);
    this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state === nextState) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    NYTApi.
  }

  setSearch(args) {
    console.log('Diff so here it is', args);
    this.setState(args);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Query performSearch={this.setSearch} />
        </div>
      </div>
    );
  }
}

export default Search;
