export const fetchLocalCharities = (state, city, category) => {
  return fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=51c3d010&app_key=f71a48f0402bea6076390a0a521c26b4&categoryID=${category}&state=${state}&city=${city}`)
    .then(response => {
      handleFetchErrors(response);
      return response.json();
    })
}

const handleFetchErrors = (response) => {
  console.log(response)
  if (response.status >= 500) {
    throw new Error('The server is not responding. Please refresh the page and try again.')
  } else if (response.status === 404) {
    throw new Error('Sorry, but there seems to be no charities in our database that matched your search. Try searching for a different category OR location.');
  }
}

export const modifyDataFromFetch = (response) => {
  return response.map(data => {
    return {
      name: data.charityName,
      mission: data.mission.replace(/<br>/g, ''),
      cause: data.cause.causeName,
      website: data.websiteURL,
      address: data.mailingAddress
    }
  })
}
