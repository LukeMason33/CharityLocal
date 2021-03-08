import React from 'react';
import {Link} from 'react-router-dom';
import LandingPageForm from '../LandingPageForm/LandingPageForm.js';
import './LandingPage.css';
import PropTypes from 'prop-types';

const LandingPage = ({fetchCharitiesByCategory, error, clearError}) => {
  return (
    <section className='landing-page'>
      <div className='landing-page-header'>
        <div className='title-slogan-container'>
          <h1 className='site-title'>Charity Local</h1>
          <h2 className='site-slogan'>Give back to your community. Donate locally.</h2>
        </div>
      </div>
      <div className='form-container'>
        < LandingPageForm
          fetchCharitiesByCategory={fetchCharitiesByCategory}
          error={error}
          clearError={clearError}
        />
      </div>
      <Link to='/about'>
        <button className='to-about-btn'>About</button>
      </Link>
    </section>
  )
}

export default LandingPage;

LandingPage.propTypes = {
  fetchCharitiesByCategory: PropTypes.func,
  error: PropTypes.string,
  clearError: PropTypes.func
}
