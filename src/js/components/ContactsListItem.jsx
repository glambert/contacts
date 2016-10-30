import React, { PropTypes, Component } from 'react';

// NOTE: keep in mind, event handling in stateless functionnal components
// might bring performance issues on larger data sets, see comments in:
// https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
// When in doubt or a component needs lifecycle hooks, use `class Name extends Component {}`

const ContactsListItem = ({ contact, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick(contact.id);
  }
  return (
    <a href="" className="u-display-block u-pad-vert-1" onClick={handleClick}>
      {contact.name}
    </a>
  )
};

ContactsListItem.propTypes = {};

export default ContactsListItem;
