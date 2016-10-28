import React, { PropTypes, Component } from 'react';
import ContactsAdd from './ContactsAdd';
import ContactsFilter from './ContactsFilter';
import ContactsListItem from './ContactsListItem';

const ContactsList = ({ list }) => {
  return (
    <div className="u-pad-3">
      <ContactsAdd />
      <ContactsFilter />
      {list.map((contact, i) =>
        <ContactsListItem key={i} contact={contact} />
      )}
    </div>
  )
}

ContactsList.defaultProps = {
  list: [
    { name: 'Anne-Marie Fortin' },
    { name: 'Pascal Peuckert' },
    { name: 'Tom Bertrand' },
    { name: 'Julien L. le Goff' },
    { name: 'Guillaume Lambert' },
  ]
}

ContactsList.propTypes = {
  list: PropTypes.array.isRequired
}

export default ContactsList;
