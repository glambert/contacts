import React, { PropTypes, Component } from 'react';

const ContactsListItem = ({ contact }) => {
  return (
    <a href="" className="u-display-block u-pad-vert-1">
      {contact.name}
    </a>
  )
};

ContactsListItem.propTypes = {};

export default ContactsListItem;
