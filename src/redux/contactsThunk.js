import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from 'api/contactsApi';

export const getContactsThunk = createAsyncThunk('contacts/getContacts', () =>
  getContacts()
);

export const addContactsThunk = createAsyncThunk('contacts/addContact', data =>
  addContact(data)
);

export const deleteContactsThunk = createAsyncThunk('contacts/deleteContact', id =>
  deleteContact(id)
);
