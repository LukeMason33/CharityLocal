import React, {useState} from 'react';
import CharityCard from '../CharityCard/CharityCard.js';

const CharityContainer = ({charities}) => {

  const fillCharityCards = () => {
    return charities.map(charity => < CharityCard charity={charity} />)
  }

  return (
    <section className='charity-cards-section'>
      {fillCharityCards()}
    </section>
  )
}

export default CharityContainer;
