import React, { PropTypes, Component } from 'react';

const ContactsFilter = ({}) => {
  return (
    <form className="u-mb-2" onSubmit={(event) => { event.preventDefault(); }}>
      <input className="form-control" type="search" placeholder="Filter Contacts"
        onChange={(event) => {
          console.log(`Filter contact for ${event.target.value || 'all'}`);
        }} />
    </form>
  )
};

ContactsFilter.propTypes = {};

export default ContactsFilter;
