import React, { PropTypes, Component } from 'react';
import ContactsFilter from './ContactsFilter';
import ContactsListItem from './ContactsListItem';

export default class ContactsList extends Component {

  static defaultProps = {
    list: [],
    onItemClick: (id) => {}
  }

  static propTypes = {
    list: PropTypes.array.isRequired,
    onItemClick: PropTypes.func.isRequired
  }

  state = {
    filter: undefined,
  }

  onChangeFilter = (text) => {
    this.setState({ filter: text });
  }

  render() {
    const { list, onItemClick } = this.props;
    const { filter } = this.state;
    const filteredList = filter ? list.filter((item) =>
      item.name.toLowerCase().indexOf(filter ? filter.toLowerCase() : null) !== -1
    ) : list;
    return (
      <div>
        <ContactsFilter
          onChange={(text) => this.onChangeFilter(text)} />
        {filteredList.map((contact, i) =>
          <ContactsListItem
            key={i}
            contact={contact}
            onClick={(id) => onItemClick(id)} />
        )}
      </div>
    )
  }

}
