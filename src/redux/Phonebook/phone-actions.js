import { createAction } from '@reduxjs/toolkit';

//pending
export const getContactsRequest = createAction('getContacts/request');

//resolved
export const getContactsSuccess = createAction('getContacts/success');

//rejected
export const getContactsError = createAction('getContacts/error');

// import { v4 as uuidv4 } from 'uuid';

// export const addContact = createAction('contacts/Add', ({ name, number }) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }));
// export const deleteContact = createAction('contacts/Delete');
// export const changeFilter = createAction('contacts/changeFilter');