import { VscClose } from 'react-icons/vsc';
import { ContactListStyled, ContactItem, ContactText, DeleteBtn } from './ContactList.styled';

function ContactList({ contacts, onDelete }) {
  return (
    <ContactListStyled>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          <ContactText>
            {contact.name}: {contact.number}
          </ContactText>
          <DeleteBtn type="button" onClick={() => onDelete(contact.id)}>
            <VscClose style={{ color: 'rgba(255,0,0,.548)' }} />
          </DeleteBtn>
        </ContactItem>
      ))}
    </ContactListStyled>
  );
}

export default ContactList;
