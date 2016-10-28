import React, { PropTypes, Component } from 'react';

const ContactsView = ({ contact }) => {
  return (
    <div className="u-p-3">
      <div className="row u-mb-4">
        <div className="col-1-5">
          <img className="u-img-circle" src={contact.picture}
            alt="Name" width="100" />
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
        <a href="" className="btn btn--default u-text-n1">Edit</a>
        <a href="" className="btn btn--default u-text-n1">Delete</a>
      </div>
    </div>
  )
};

ContactsView.defaultProps = {
  contact: {
    id: 1,
    name: 'Guillaume Lambert',
    title: 'Senior Front-End Developer',
    address: '2675 Basile-Routhier, Laval, QC. Canada',
    phoneHome: '514-555-5555',
    phoneWork: '514-555-5555',
    email: 'glambertmtl@gmail.com',
    picture: 'http://placehold.it/200/f7f7f7/424242/?text=Photo',
    note: 'Building the Web since 1996'
  }
};

ContactsView.propTypes = {
  contact: PropTypes.object
};

export default ContactsView;
