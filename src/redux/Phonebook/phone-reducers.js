import { combineReducers } from 'redux';
import initialContacts from '../../data.json';
import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from './phone-types';

const contactList = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];

    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);
    default:
      return state;
  }
};

const contactFilter = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const contactReducer = combineReducers({
  contact: contactList,
  filter: contactFilter,
});

export default contactReducer;
