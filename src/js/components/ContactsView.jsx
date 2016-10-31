import React, { PropTypes, Component } from 'react';

const ContactsView = ({ contact, onEditClick, onDeleteClick }) => {
  if (!contact) {
    return (
      <p className="u-p-3">Select or add contact</p>
    );
  }
  return (
    <div className="u-p-3">
      <div className="row u-mb-4">
        <div className="col-1-5">
          <img className="u-img-circle" src={contact.picture} alt="Photo" width="100" />
        </div>
        <div className="col-4-5 u-pt-2">
          <h2 className="u-mb-0">{contact.name}</h2>
          <h4>{contact.title}</h4>
        </div>
      </div>
      <div className="row u-mb-2">
        <div className="col-1-5 u-text-right">Address</div>
        <div className="col-4-5">
          {contact.address}
        </div>
      </div>
      <div className="row u-mb-2">
        <div className="col-1-5 u-text-right">Phone (home)</div>
        <div className="col-4-5">
          <a href={`tel:${contact.phoneHome}`}>{contact.phoneHome}</a>
        </div>
      </div>
      <div className="row u-mb-2">
        <div className="col-1-5 u-text-right">Phone (work)</div>
        <div className="col-4-5">
          <a href={`tel:${contact.phoneWork}`}>{contact.phoneWork}</a>
        </div>
      </div>
      <div className="row u-mb-2">
        <div className="col-1-5 u-text-right">Email</div>
        <div className="col-4-5">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>
      <div className="row u-mb-2">
        <div className="col-1-5 u-text-right">Note</div>
        <div className="col-4-5">
          {contact.note}
        </div>
      </div>
      <div className="u-pt-3 u-text-center">
        <button className="btn btn--primary u-text-n1"
          onClick={(event) => onEditClick(contact.id)}>Edit</button>
        <a href="" className="btn u-text-n1"
          onClick={(event) => {
            event.preventDefault();
            if (window.confirm('Are you sure you want to delete this contact?')) {
              onDeleteClick(contact.id);
            }
          }}>Delete</a>
      </div>
    </div>
  )
};

ContactsView.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired
};

export default ContactsView;
