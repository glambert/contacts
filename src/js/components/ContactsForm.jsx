import React, { PropTypes, Component } from 'react';
import serialize from 'form-serialize';

export default class ContactsForm extends Component {

  static propTypes = {
    status: PropTypes.string.isRequired,
    contact: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  }

  handleSubmit = (event) => {
    const { status, contact, onSave, onEdit } = this.props;
    const data = serialize(this.form, { hash: true });
    event.preventDefault();
    if (status === 'edit') {
      onEdit(contact.id, data);
    } else {
      onSave(data);
    }
  }

  handleCancelClick = (event) => {
    const { contact, onCancel } = this.props;
    event.preventDefault();
    onCancel(contact.id);
  }

  render() {
    const { status, contact } = this.props;
    return (
      <form className="u-p-3" onSubmit={this.handleSubmit} ref={(form) => this.form = form}>
        <div className="row u-mb-2">
          <div className="col-1-5">
            <img className="u-img-circle" src="https://placehold.it/200/f7f7f7/424242/?text=Photo"
              alt="Name" width="100" />
          </div>
          <div className="col-3-5 u-pt-2">
            <input className="form-control u-mb-2" type="text" name="name" placeholder="Name"
              defaultValue={contact.name} autoFocus required />
            <input className="form-control" type="text" name="title" placeholder="Title"
              defaultValue={contact.title} />
          </div>
        </div>
        <div className="row u-mb-2">
          <label htmlFor="addressId" className="col-1-5 u-text-right u-pt-1">Address</label>
          <div className="col-3-5">
            <input className="form-control" type="text" id="addressId" name="address"
              defaultValue={contact.address} />
          </div>
        </div>
        <div className="row u-mb-2">
          <label htmlFor="phoneHomeId" className="col-1-5 u-text-right u-pt-1">Phone (home)</label>
          <div className="col-3-5">
            <input className="form-control" type="text" id="phoneHomeId" name="phoneHome"
              defaultValue={contact.phoneHome} />
          </div>
        </div>
        <div className="row u-mb-2">
          <label htmlFor="phoneWorkId" className="col-1-5 u-text-right u-pt-1">Phone (work)</label>
          <div className="col-3-5">
            <input className="form-control" type="text" id="phoneWorkId" name="phoneWork"
              defaultValue={contact.phoneWork} />
          </div>
        </div>
        <div className="row u-mb-2">
          <label htmlFor="emailId" className="col-1-5 u-text-right u-pt-1">Email</label>
          <div className="col-3-5">
            <input className="form-control" type="email" id="emailId" name="email"
              defaultValue={contact.email} />
          </div>
        </div>
        <div className="row u-mb-2">
          <label htmlFor="noteId" className="col-1-5 u-text-right u-pt-1">Note</label>
          <div className="col-3-5">
            <textarea className="form-control" id="noteId" name="note"
              defaultValue={contact.note}></textarea>
          </div>
        </div>
        <div className="u-pt-1 u-text-center">
          {status === 'edit' &&
            <a className="btn btn--default" onClick={this.handleCancelClick}>Cancel</a>
          }
          <button type="submit" className="btn btn--primary">
            {status === 'create' ? 'Add' : 'Save'}
          </button>
        </div>
      </form>
    );
  }

}
