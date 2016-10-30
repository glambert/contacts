import * as actions from '../actions';

// Status can be 'view', 'create' or 'edit'
// Set to view id #1 as initial state
const initialState = {
  status: 'view',
  id: 1
};

export default function mode(state = initialState, action) {

  switch (action.type) {

    case actions.SET_MODE:
      return {
        status: action.status,
        id: action.id
      }

    default:
      return state;

  }

}
