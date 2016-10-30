import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import ContactsAdd from '../components/ContactsAdd';
import ContactsList from '../components/ContactsList';
import ContactsView from '../components/ContactsView';
import ContactsForm from '../components/ContactsForm';

class App extends Component {

  render() {
    const { contacts, mode } = this.props;
    const {
      onContactAdd,
      onContactView,
      onContactEdit,
      onContactDelete,
      onContactSave
    } = this.props;
    return (
      <div className="row">
        <div className="col-1-3">
          <div className="u-pad-3">
            <ContactsAdd
              onClick={() => onContactAdd()} />
            <ContactsList
              list={contacts}
              onItemClick={(id) => onContactView(id)} />
          </div>
        </div>
        <div className="col-2-3">
          {mode.status === 'view'
            ? <ContactsView
                contact={contacts.filter((contact) => contact.id === mode.id)[0]}
                onEditClick={(id) => onContactEdit(id)}
                onDeleteClick={(id) => onContactDelete(id)} />
            : <ContactsForm
                status={mode.status}
                contact={contacts.filter((contact) => contact.id === mode.id)[0]}
                onSave={(data) => onContactSave(data)}
                onEdit={() => { console.log('Submit'); }}
                onCancel={() => { console.log('Cancel'); }} />
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
    onContactAdd: () => dispatch(actions.setMode('create')),
    onContactView: (id) => dispatch(actions.setMode('view', id)),
    onContactEdit: (id) => dispatch(actions.setMode('edit', id)),
    onContactDelete: (id) => dispatch(actions.deleteContact(id)),
    onContactSave: (data) => dispatch(actions.createContact(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
