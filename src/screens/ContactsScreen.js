import React from 'react';
import ContactList from '../components/ContactList';
import { logOut } from '../services/auth';

const ContactsScreen = () => {
  return (
    <div>
      <h2>Welcome!</h2>
      <button onClick={logOut}>Log Out</button>
      <ContactList />
    </div>
  );
};

export default ContactsScreen;