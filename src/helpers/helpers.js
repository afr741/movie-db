// Round ratings
export const roundRating = (rating) => Number(rating).toFixed(1);

export const convertDate = (date) => date.split("-")[0];

export const truncateOverview = (overview) => overview.split(".")[0];
// Session Storage
export const isPersistedState = (stateName) => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
};
