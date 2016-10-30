/**
 * Each constant (action type) should have a matching function (action creator)
 * This is basically a reference for our actions and also a way to prevent
 * duplicates with constants.
 *
 * See http://redux.js.org/docs/basics/Actions.html for more info
 */

// NOTE: This is only for demo purpose, so we don't have duplicate IDs when
// adding a new contact in ADD_CONTACT
let nextContactId = 6;

export const ADD_CONTACT = 'ADD_CONTACT';
export function addContact(data) {
  return {
    type: ADD_CONTACT,
    id: nextContactId++,
    data
  }
}

export const EDIT_CONTACT = 'EDIT_CONTACT';
export function editContact(id, data) {
  return {
    type: EDIT_CONTACT,
    id,
    data
  }
}

export const DELETE_CONTACT = 'DELETE_CONTACT';
export function deleteContact(id) {
  return {
    type: DELETE_CONTACT,
    id
  }
}

export const SET_MODE = 'SET_MODE';
export function setMode(status, id = null) {
  return {
    type: SET_MODE,
    status,
    id
  }
}
