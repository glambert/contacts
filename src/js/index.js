import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';

class Contacts extends Component {

  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }

}

ReactDOM.render(
  <Contacts />,
  document.getElementById('app')
);
