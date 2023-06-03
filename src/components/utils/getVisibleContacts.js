export const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.value.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
