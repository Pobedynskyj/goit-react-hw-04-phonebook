import { useState } from 'react';
import s from '../App.module.css';
import Contacts from './Contacts';
import Filter from './Filter';
import Form from './Form';

export default function App() {
  const [contacts, setContacts] = useState({
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', tel: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', tel: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', tel: '227-91-26' },
    ],
  });
  const [filter, setFilter] = useState({
    filter: '',
  });

  const handleSubmit = object => {
    setContacts({ contacts: [...contacts, object] });

    const checkContact = contacts.find(
      contact => contact.name.toLowerCase() === object.name.toLowerCase()
    );
  };

  const handleDelete = id => {
    setContacts(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  const filterByName = e => {
    setFilter({ filter: e.currentTarget.value });
  };

  const visibleContacts = () => {
    const normalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalize)
    );
  };
  return (
    <div className={s.mainDiv}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <Form changeAppState={handleSubmit} />
      <h1 className={s.mainTitle}>Contacts</h1>
      <Filter filterName={filterByName} value={filter} />
      <Contacts contacts={visibleContacts} onDelete={handleDelete} />
    </div>
  );
}
