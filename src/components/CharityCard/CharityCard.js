import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const CharityCard = ({charity}) => {

  return (
    <article className={`${charity.name}-charity-card`}>
      <div className='name-and-address-container'>
        <h1 className='charity-name'>{charity.name}</h1>
        <div className='address-container'>
          <p className='state-and-city'>{charity.address.city}, {charity.address.stateOrProvince}</p>
          <p className='address'>{charity.address.streetAddress1} {charity.address.streetAddress2}, {charity.address.postalCode}</p>
        </div>
        <div className='cause-container'>
          <h2>Cause</h2>
          <p className='charity-cause'>{charity.cause}</p>
        </div>
        <div className='mission-container'>
          <h2>Mission</h2>
          <p className='charity-mission'>{charity.mission}</p>
        </div>
      </div>
    </article>
  )
}

export default CharityCard;
