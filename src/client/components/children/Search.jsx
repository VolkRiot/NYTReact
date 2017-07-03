/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Query from './search/Query';
import Results from './search/Results';

function Search(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Query
            search={props.currentParams}
            actions={props.actions}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Results
            results={props.currentResults}
            socket={props.socket}
            actions={props.actions}
          />
        </div>
      </div>
    </div>
  );
}

// class Search extends Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <Query
//               search={this.props.currentParams}
//               actions={this.props.actions}
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12">
//             <Results
//               results={this.props.currentResults}
//               socket={this.props.socket}
//               actions={this.props.actions}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

Search.propTypes = {
  socket: PropTypes.object.isRequired,
  currentParams: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  currentResults: PropTypes.array.isRequired,
};

export default Search;
