import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Query extends Component {
  constructor(props) {
    super(props);
    console.log('Properties passes to Quesry form ', props);
    this.state = { topic: '', startYr: '', endYr: '' };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeSearch(e) {
    this.props.actions.changeTerm(e.target.value);
  }

  // handleChangeStartYr(e) {
  //   this.props.
  // }
  //
  // handleChangeEndYr(e) {
  //   this.props.
  // }

  handleSubmit() {
    this.props.performSearch(this.state);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <h4 className="">Topic</h4>

              <input
                type="text"
                value={this.props.search.topic}
                className="form-control "
                id="topic"
                onChange={this.handleChangeSearch}
              />

              <h4 className="">Start Year (Required)</h4>
              <input
                value={this.props.search.startYr}
                className="form-control "
                id="startYr"
                onChange={this.handleChangeStartYr}
                required
              />

              <h4 className="">End Year (Required)</h4>
              <input
                value={this.props.search.endYr}
                className="form-control "
                id="endYr"
                onChange={this.handleChangeEndYr}
                required
              />
            </div>

            <div className="pull-right">
              <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
                <h4>Submit</h4>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Query.propTypes = {
  performSearch: PropTypes.func.isRequired,
};

export default Query;
