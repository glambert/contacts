import * as actions from '../actions';
import data from '../data/contacts';

const contact = (state = {}, action) => {

  switch (action.type) {

    case actions.ADD_CONTACT:
      return {
        id: action.id,
        ...action.data
      }

    default:
      return state;

  }

}

export default function contacts(state = data, action) {

  switch (action.type) {

    case actions.ADD_CONTACT:
      return [
        ...state,
        contact(undefined, action)
      ];

    case actions.EDIT_CONTACT:
      return state.map((contact) => {
        if (contact.id === action.id) {
          return { ...contact, ...action.data }
        }
        return contact;
      });

    case actions.DELETE_CONTACT:
      console.log(action);
      return state.filter((contact) => contact.id !== action.id);

    default:
      return state;

  }

}
