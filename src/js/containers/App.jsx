import React, { PropTypes, Component } from 'react';
import ContactsList from '../components/ContactsList';
import ContactsView from '../components/ContactsView';
import ContactsForm from '../components/ContactsForm';

class App extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-1-3">
          <ContactsList />
        </div>
        <div className="col-2-3">
          <div className="u-pad-3">
            Select a contact (empty)
          </div>
          <ContactsView />
          <ContactsForm />
        </div>
      </div>
    );
  }

}

export default App;
