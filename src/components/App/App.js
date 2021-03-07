import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage.js';
import MainDashboard from '../MainDashboard/MainDashboard.js';
import {fetchLocalCharities, modifyDataFromFetch} from '../../utilities.js';
import './App.css';


const App = () => {
  const [charities, setCharities] = useState([]);
  const [noCharitiesFoundError, setNoCharitiesFoundError] = useState('');

  const fetchCharitiesByCategory = (state, city, category) => {
    fetchLocalCharities(state, city, category)
      .then(response => {
        setCharities(modifyDataFromFetch(response))
      })
      .catch(error => {
        setNoCharitiesFoundError(error.message);
      })
  }

  const clearError = () => {
    setNoCharitiesFoundError('');
  }

  return (
    <>
      {noCharitiesFoundError && < Redirect to='/' />}
      <Switch>
        <Route
          exact path='/'
          render={() => {
            return < LandingPage
              fetchCharitiesByCategory={fetchCharitiesByCategory}
              error={noCharitiesFoundError}
              clearError={clearError}
            />
          }}
        />
        <Route
          exact path='/dashboard'
          render={() => {
            return < MainDashboard charities={charities} />
          }}
        />
      </Switch>
    </>
  )
}

export default App;
