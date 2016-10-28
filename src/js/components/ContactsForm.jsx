import React, { PropTypes, Component } from 'react';

const ContactsForm = ({ contact }) => {
  return (
    <form className="u-p-3">
      <div className="row u-mb-4">
        <div className="col-1-5">
          <img className="u-img-circle" src="http://placehold.it/200/f7f7f7/424242/?text=Photo"
            alt="Name" width="100" />
        </div>
        <div className="col-3-5 u-pt-2">
          <input className="form-control u-mb-2" type="text" name="name" placeholder="Name" />
          <input className="form-control" type="text" name="title" placeholder="Title" />
        </div>
      </div>
      <div className="row u-mb-2">
        <label htmlFor="addressId" className="col-1-5 u-text-right u-pt-1">Address</label>
        <div className="col-3-5">
          <input className="form-control" type="text" id="addressId" name="address" />
        </div>
      </div>
      <div className="row u-mb-2">
        <label htmlFor="phoneHomeId" className="col-1-5 u-text-right u-pt-1">Phone (home)</label>
        <div className="col-3-5">
          <input className="form-control" type="text" id="phoneHomeId" name="phoneHome" />
        </div>
      </div>
      <div className="row u-mb-2">
        <label htmlFor="phoneWorkId" className="col-1-5 u-text-right u-pt-1">Phone (work)</label>
        <div className="col-3-5">
          <input className="form-control" type="text" id="phoneWorkId" name="phoneWork" />
        </div>
      </div>
      <div className="row u-mb-2">
        <label htmlFor="emailId" className="col-1-5 u-text-right u-pt-1">Email</label>
        <div className="col-3-5">
          <input className="form-control" type="email" id="emailId" name="email" />
        </div>
      </div>
      <div className="row u-mb-2">
        <label htmlFor="noteId"  className="col-1-5 u-text-right u-pt-1">Note</label>
        <div className="col-3-5">
          <textarea className="form-control" id="noteId" name="note"></textarea>
        </div>
      </div>
      <div className="u-pt-1 u-text-center">
        <button type="submit" className="btn btn--primary">Save</button>
      </div>
    </form>
  )
};

ContactsForm.propTypes = {};

export default ContactsForm;
