import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from 'redux/contactsThunk';
import { getContactsSelector } from 'redux/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const { data } = useSelector(getContactsSelector);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const phone = e.target.elements.number.value;

    const isInclude = data.some(item => item.name === name);

    if (isInclude) {
      alert(`${name} is already in contacts`);
      e.target.elements.name.value = '';
      e.target.elements.number.value = '';
      return;
    }
    dispatch(addContactsThunk({ name, phone }));
    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          className={css.inputs}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.inputs}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.submitButton} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
