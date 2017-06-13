import React, { Component } from 'react';

class Query extends Component {
  constructor(props) {
    super(props);
    this.state = { topic: '', startYr: '', endYr: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
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
              />

              <h4 className="">End Year (Required)</h4>
              <input
                value={this.state.endYr}
                className="form-control "
                id="endYr"
                onChange={this.handleChange}
              />

            </div>

            <div className="pull-right">
              <button type="button" className="btn btn-primary">
                <h4>Submit</h4>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Query;
