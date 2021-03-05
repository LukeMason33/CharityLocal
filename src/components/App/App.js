import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage.js';
import './App.css';


const App = () => {
  return (
    <Switch>
      <Route
      exact path='/'
      render={() => {
        return < LandingPage />
      }}
      />
    </Switch>
  )
}

export default App;
