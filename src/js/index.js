import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Contacts extends Component {

  render() {
    return (
      <div className="u-pb-4">
        App entry point
      </div>
    )
  }

}

ReactDOM.render(
  <Contacts />,
  document.getElementById('app')
);
