import { useSelector, useDispatch } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import css from './ContactList.module.css';
import { deleteContactsThunk, getContactsThunk } from 'redux/contactsThunk';
import { useEffect } from 'react';

const selector = state => state.contacts;
const ContactList = () => {
  const { data, error, isLoading } = useSelector(selector);
  const dispatch = useDispatch();
  const filterName = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const visibleContacts = () => {
    return [...data].filter(({ name }) =>
      name.toLowerCase().includes(filterName.toLowerCase())
    );
  };

  return (
    <div>
      {isLoading && (
        <ThreeDots
          height="60"
          width="60"
          radius="9"
          color="#000000"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
      {error && <p>Oops, something wrong</p>}
      {data && (
        <ul className={css.contactList}>
          {visibleContacts().map(item => {
            return (
              <li key={item.id} className={css.contact}>
                <span className={css.contactItem}> {item.name}:</span>{' '}
                <span>{item.phone}</span>
                <button
                  className={css.deleteButton}
                  onClick={e => dispatch(deleteContactsThunk(item.id))}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
