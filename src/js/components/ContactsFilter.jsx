import React, { PropTypes, Component } from 'react';

const ContactsFilter = ({}) => {
  return (
    <form className="u-mb-2">
      <input className="form-control" type="search" placeholder="Filter Contacts" />
    </form>
  )
};

ContactsFilter.propTypes = {};

export default ContactsFilter;
