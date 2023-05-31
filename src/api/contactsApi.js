import axios from 'axios';

axios.defaults.baseURL = 'https://647701899233e82dd53ab5df.mockapi.io';

export const getContacts = async () => {
  const res = await axios.get('/contacts');
  return res.data;
};

export const addContact = async data => {
  const res = await axios.post('/contacts', data);
  return res.data;
};

export const deleteContact = async id => {
  const res = await axios.delete(`/contacts/${id}`);
  return res.data;
};
