import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  addContactsThunk,
  deleteContactsThunk,
} from './contactsThunk';

const initialState = { data: [], isLoading: false, error: null };

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.error = payload;
};
const handleFulfilledGet = (state, { payload }) => {
  state.data = payload;
};
const handleFulfilledAdd = (state, { payload }) => {
  state.data.unshift(payload);
};
const handleFulfilledDelete = (state, { payload }) => {
  const index = state.data.findIndex(contact => contact.id === payload.id);
  state.data.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(
          getContactsThunk.fulfilled,
          addContactsThunk.fulfilled,
          deleteContactsThunk.fulfilled
        ),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.pending,
          addContactsThunk.pending,
          deleteContactsThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          addContactsThunk.rejected,
          deleteContactsThunk.rejected
        ),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
