import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage.js';
import MainDashboard from '../MainDashboard/MainDashboard.js';
import AboutPage from '../AboutPage/About.js';
import NotFoundPage from '../NotFoundPage/NotFoundPage.js';
import {fetchLocalCharities, modifyDataFromFetch} from '../../utilities.js';
import './App.css';


const App = () => {
  const [charities, setCharities] = useState([]);
  const [noCharitiesFoundError, setNoCharitiesFoundError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCharitiesByCategory = (state, city, category) => {
    setLoading(true);
    fetchLocalCharities(state, city, category)
      .then(response => {
        setCharities(modifyDataFromFetch(response))
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
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
            return (
              <>
                {loading && <p className='loading-message'>Loading Charities...</p>}
                {!loading && < MainDashboard charities={charities} />}
              </>
            )
          }}
        />
        <Route
          exact path='/about'
          render={() => {
            return < AboutPage charities={charities} clearError={clearError}/>
          }}
        />
        <Route
          path='*'
          render={() => {
            return < NotFoundPage />
          }}
        />
      </Switch>
    </>
  )
}

export default App;
