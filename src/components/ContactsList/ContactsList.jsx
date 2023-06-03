import { useDispatch, useSelector } from 'react-redux';
import { List, ItemContact, Button } from './ContactsList.styled';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { getVisibleContacts } from 'components/utils/getVisibleContacts';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  const visibleContacts = getVisibleContacts(contacts, filter);
// ?
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ItemContact key={id}>
          {name}: {number}
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </ItemContact>
      ))}
    </List>
  );
};
