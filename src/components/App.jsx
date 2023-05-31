import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        margin: '30px',
        display: 'flex',
        flexDirection: 'column',
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter/>
      <ContactList/>
    </div>
  );
};
