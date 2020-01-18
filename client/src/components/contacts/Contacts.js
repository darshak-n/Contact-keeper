import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactsItem from './ContactsItems';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(contact => (
            <ContactsItem key={contact.id} contact={contact}></ContactsItem>
          ))
        : contacts.map(contact => (
            <ContactsItem key={contact.id} contact={contact}></ContactsItem>
          ))}
    </Fragment>
  );
};

export default Contacts;
