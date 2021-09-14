/** @format */

import { createReducer, combineReducers } from "@reduxjs/toolkit";
import allActions from "./contacts-actions";
import { contactsFetchDelete, contactsFetchPost } from "./contacts-operation";

const entris = createReducer([], {
  [allActions.fetchContactSucess]: (_, { payload }) => payload,

  [contactsFetchPost.fulfilled]: (state, { payload }) => {
    return payload ? [...state, payload] : state;
  },

  [contactsFetchDelete.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoding = createReducer(false, {
  [allActions.fetchContactRequest]: () => true,
  [allActions.fetchContactSucess]: () => false,
  [allActions.fetchContactError]: () => false,

  [contactsFetchPost.pending]: () => true,
  [contactsFetchPost.fulfilled]: () => false,
  [contactsFetchPost.rejected]: () => false,

  [contactsFetchDelete.pending]: () => true,
  [contactsFetchDelete.fulfilled]: () => false,
  [contactsFetchDelete.rejected]: () => false,
});

const error = createReducer(null, {
  [allActions.fetchContactError]: (state, action) => action.payload,
  [allActions.fetchContactSucess]: () => null,

  [contactsFetchPost.rejected]: (state, action) => action.payload,
  [contactsFetchPost.fulfilled]: () => null,

  [contactsFetchDelete.rejected]: (state, action) => action.payload,
  [contactsFetchDelete.fulfilled]: () => null,
});

const reducerFilter = createReducer("", {
  [allActions.filters]: (_, { payload }) => payload,
});

const contactsReduscer = combineReducers({
  entris,
  isLoding,
  error,
});

const allReducer = { contactsReduscer, reducerFilter };

export default allReducer;
