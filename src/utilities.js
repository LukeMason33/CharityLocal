export const fetchLocalCharities = (state, city, category) => {
  return fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=51c3d010&app_key=f71a48f0402bea6076390a0a521c26b4&rated=true&categoryID=${category}&state=${state}&city=${city}`)
    .then(response => {
      handleFetchErrors(response);
      return response.json();
    })
}

const handleFetchErrors = (response) => {
  if (response.code >= 500) {
    throw new Error('The server is not responding. Please refresh the page and try again.')
  } else {
    return response;
  }
}
