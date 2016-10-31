import React, { PropTypes, Component } from 'react';

const ContactsFilter = ({ onChange }) => {
  return (
    <form className="u-mb-2" onSubmit={(event) => { event.preventDefault(); }}>
      <input className="form-control" type="text" placeholder="Filter Contacts"
        onChange={(event) => onChange(event.target.value)} />
    </form>
  )
};

ContactsFilter.propTypes = {
  onChange: (value) => {}
};

export default ContactsFilter;
