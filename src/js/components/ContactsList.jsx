import React, { PropTypes, Component } from 'react';
import ContactsFilter from './ContactsFilter';
import ContactsListItem from './ContactsListItem';

const ContactsList = ({ list, onItemClick }) => {
  return (
    <div>
      <ContactsFilter />
      {list.map((contact, i) =>
        <ContactsListItem
          key={i}
          contact={contact}
          onClick={(id) => onItemClick(id)} />
      )}
    </div>
  )
}

ContactsList.defaultProps = {
  list: [],
  onItemClick: (id) => {}
}

ContactsList.propTypes = {
  list: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default ContactsList;
