import React, { PropTypes, Component } from 'react';

const ContactsAdd = ({ onClick }) => {
  return (
    <div className="u-mb-2">
      <button className="btn btn--primary btn--block" onClick={onClick}>
        Add Contact
      </button>
    </div>
  )
}

ContactsAdd.propTypes = {
  onClick: () => {}
}

ContactsAdd.propTypes = {
  onClick: PropTypes.func
}

export default ContactsAdd;
