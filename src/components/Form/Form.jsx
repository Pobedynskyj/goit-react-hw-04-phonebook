import { useState } from 'react';
import s from './Form.module.css';
import { nanoid } from 'nanoid';

export default function Form({ changeAppState }) {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'name':
        return setName(value);
      case 'tel':
        return setTel(value);
      default:
        return alert('Error');
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const obj = { name: name, tel: tel, id: nanoid(3) };
    changeAppState(obj);
  };

  return (
    <form className={s.form} onSubmit={handleSubmitForm}>
      <label>
        <p className={s.labelTitle}>Name</p>
        <input
          className={s.formInput}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />{' '}
      </label>
      <label>
        <p className={s.labelTitle}>Phone</p>
        <input
          className={s.formInput}
          type="number"
          name="tel"
          onChange={handleChange}
        />{' '}
      </label>
      <button className={s.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}
