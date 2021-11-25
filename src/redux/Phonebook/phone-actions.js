import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from './phone-types';
import { v4 as uuidv4 } from 'uuid';

export const addContact = ({ name, number }) => ({
  type: ADD_CONTACT,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});
