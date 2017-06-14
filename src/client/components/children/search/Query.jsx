import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Query extends Component {
  constructor(props) {
    super(props);
    this.state = { topic: '', startYr: '', endYr: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

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
                value={this.state.topic}
                className="form-control "
                id="topic"
                onChange={this.handleChange}
              />

              <h4 className="">Start Year (Required)</h4>
              <input
                value={this.state.startYr}
                className="form-control "
                id="startYr"
                onChange={this.handleChange}
                required
              />

              <h4 className="">End Year (Required)</h4>
              <input
                value={this.state.endYr}
                className="form-control "
                id="endYr"
                onChange={this.handleChange}
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
  performSearch: PropTypes.func,
};

Query.defaultProps = {
  performSearch: () => {
    // eslint-disable-next-line no-console
    console.log('Clicked');
  },
};

export default Query;
