/** @format */

const visibleContacnsList = (state) => {
  const normalFilter = state?.filter?.toLowerCase();
  const contacts = state?.contacts?.entris;
  const visibleContacns = state?.contacts?.entris?.filter((contact) =>
    contact?.name?.toLowerCase().includes(normalFilter)
  );

  return normalFilter ? visibleContacns : contacts;
};

const newContactc = (state) => {
  return state?.contacts?.entris;
};

const allSelectors = { visibleContacnsList, newContactc };

export default allSelectors;
