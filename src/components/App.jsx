import { useState, useEffect } from 'react';
import s from '../App.module.css';
import Contacts from './Contacts';
import Filter from './Filter';
import Form from './Form';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  const handleSubmit = object => {
    setContacts({ contacts: [...contacts, object] });

    // const checkContact = contacts.find(
    //   contact => contact.name.toLowerCase() === object.name.toLowerCase()
    // );
  };

  const handleDelete = id => {
    setContacts(prevState => prevState.filter(el => el.id !== id));
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

  useEffect(() => {
    const getStorageContacts = localStorage.getItem('contacts');

    if (getStorageContacts !== null) {
      const contactsStorage = JSON.parse(getStorageContacts);
      if (contactsStorage.length !== contacts.length) {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      }
    }
  }, [contacts]);
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
