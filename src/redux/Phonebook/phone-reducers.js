import { createReducer } from '@reduxjs/toolkit';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
} from './phone-actions';

export const entities = createReducer([], {
  [getContactsSuccess]: (state, action) => {
    return [...state,...action.payload]
  },
});

export const loading = createReducer(false, {
  [getContactsRequest]: (_, action) =>  true,
});

export const error = createReducer(false, {
  [getContactsError]: (_, action) =>  action.payload
});




// import { addContact, deleteContact, changeFilter } from './phone-actions';
// import initialContacts from '../../data.json';

// export const contactList = createReducer(initialContacts, {
//   [addContact]: (state, { payload }) => [...state, payload],
//   [deleteContact]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

// export const contactFilter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });
