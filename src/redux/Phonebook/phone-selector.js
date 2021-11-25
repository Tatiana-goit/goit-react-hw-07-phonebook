export const getContacts = state => state.contact;

export const getFilter = state => state.filter;

export const getFiltredContacts = state => {
  const normalizeFilter = getFilter(state).toLowerCase();
  const filteredContact = getContacts(state).filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter),
  );
  return filteredContact;
};
