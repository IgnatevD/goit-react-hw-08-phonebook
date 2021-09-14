/** @format */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as conactsAPI from "../../servis/contacts-API";
import allActions from "./contacts-actions";

export const fetchContacts = () => async (dispatch) => {
  dispatch(allActions.fetchContactRequest());

  try {
    const data = await conactsAPI.fetchConacts();
    dispatch(allActions.fetchContactSucess(data));
  } catch (error) {
    dispatch(allActions.fetchContactError(error.message));
  }
};

export const contactsFetchPost = createAsyncThunk(
  "/contacts/contactsFetchPost",
  async (newContact, { rejectWithValue, getState }) => {
    try {
      const arryFindName = getState().contacts.entris.find(
        (contact) =>
          contact?.name?.toLowerCase() === newContact.name.toLowerCase()
      );
      if (arryFindName) {
        alert(`Ошибка, контакт с данным именем ${newContact.name} уже есть`);
        return null;
      }
      const contacts = await conactsAPI.fetchConactsPost(newContact);

      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const contactsFetchDelete = createAsyncThunk(
  "/contacts/contactsFetchDelete",
  async (id, { rejectWithValue }) => {
    try {
      await conactsAPI.fetchConactsDelete(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
