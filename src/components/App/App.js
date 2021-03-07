import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage.js';
import MainDashboard from '../MainDashboard/MainDashboard.js';
import {fetchLocalCharities, modifyDataFromFetch} from '../../utilities.js';
import './App.css';


const App = () => {
  const [charities, setCharities] = useState([]);

  const fetchCharitiesByCategory = (state, city, category) => {
    fetchLocalCharities(state, city, category)
      .then(response => {
        setCharities(modifyDataFromFetch(response))
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <Switch>
      <Route
        exact path='/'
        render={() => {
          return < LandingPage fetchCharitiesByCategory={fetchCharitiesByCategory}/>
        }}
      />
      <Route
        exact path='/dashboard'
        render={() => {
          return < MainDashboard charities={charities} />
        }}
      />
    </Switch>
  )
}

export default App;
