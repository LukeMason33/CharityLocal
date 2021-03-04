import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <section className='landing-page'>
      <div className='landing-page-header'>
        <div className='title-slogan-container'>
          <h1 className='site-title'>Charity Local</h1>
          <h2 className='site-slogan'>Give back to your community. Donate locally.</h2>
        </div>
      </div>
    </section>
  )
}

export default LandingPage;
