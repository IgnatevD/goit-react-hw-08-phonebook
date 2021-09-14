/** @format */

import axios from "axios";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

export async function fetchConacts() {
  const { data } = await axios.get(`/contacts`);
  // token.set(data.token);
  return data;
}

export async function fetchConactsPost(obj) {
  const { data } = await axios.post(`/contacts`, obj);
  // token.set(data.token);
  return data;
}

export async function fetchConactsDelete(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
