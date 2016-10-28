import { combineReducers } from 'redux';
import contacts from './contacts';
import mode from './mode';

export default combineReducers({
  contacts,
  mode,
});
