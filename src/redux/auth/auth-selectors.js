/** @format */

const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsername = (state) => state.auth.user.name;
const getIsLoding = (state) => state.auth.isLoding;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsLoding,
};
export default authSelectors;
