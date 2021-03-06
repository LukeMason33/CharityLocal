import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage.js';
import {fetchLocalCharities} from '../../utilities.js';
import './App.css';


const App = () => {

  const fetchCharitiesByCategory = (state, city, category) => {
    fetchLocalCharities(state, city, category)
      .then(response => {
        console.log(response)
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
    </Switch>
  )
}

export default App;
