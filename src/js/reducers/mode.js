import * as actions from '../actions';

// Can be 'view', 'create' or 'edit'
// 'edit' requires a ID
const initialState = {
  status: 'view',
  id: null
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
