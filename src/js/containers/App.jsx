import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import ContactsList from '../components/ContactsList';
import ContactsView from '../components/ContactsView';
import ContactsForm from '../components/ContactsForm';

class App extends Component {

  render() {
    const { contacts, mode } = this.props;
    return (
      <div className="row">
        <div className="col-1-3">
          <ContactsList />
        </div>
        <div className="col-2-3">
          {mode.status === 'view'
            ? <ContactsView id={mode.id} />
            : <ContactsForm status={mode.status} id={mode.id} />
          }
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    mode: state.mode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
