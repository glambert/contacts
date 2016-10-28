import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

class Contacts extends Component {

  render() {
    return (
      <App />
    )
  }

}

ReactDOM.render(
  <Contacts />,
  document.getElementById('app')
);
