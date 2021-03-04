import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';


const App = () => {
  return (
    <Switch>
      <Route
      exact path='/'
      render={() => {
        < LandingPage />
      }}
  );
}

export default App;
