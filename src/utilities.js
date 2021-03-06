export const fetchLocalCharities = (state, city, category) => {
  return fetch(`https://data.orghunter.com/v1/charitysearch?user_key=b9143b403b3c4adf6073d88a39573c0f&city=${city}&state=${state}&category=${category}&eligible=1&rows=100`)
    .then(response => handleFetchErrors(response))
    .then(response => response.json())
}

const handleFetchErrors = (response) => {
  if (response.code >= 500) {
    throw new Error('The server is not responding. Please refresh the page and try again.')
  }
}
