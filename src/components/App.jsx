import { useState, useEffect } from 'react';
import s from './App.module.css';
import Contacts from './Contacts';
import Filter from './Filter';
import Form from './Form';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');
  const handleSubmit = values => {
    const checkContact = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (checkContact) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    setContacts([...contacts, values]);
  };

  const handleDelete = id => {
    const newState = contacts.filter(el => el.id !== id);
    setContacts(newState);
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
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className={s.mainDiv}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <Form changeAppState={handleSubmit} />
      <h1 className={s.mainTitle}>Contacts</h1>
      <Filter filterName={filterByName} value={filter} />
      <Contacts contacts={visibleContacts()} onDelete={handleDelete} />
    </div>
  );
}
