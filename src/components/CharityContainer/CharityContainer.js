import React from 'react';
import CharityCard from '../CharityCard/CharityCard.js';
import './CharityContainer.css';

const CharityContainer = ({charities}) => {

  const fillCharityCards = () => {
    return charities.map((charity, index) => < CharityCard key={index} charity={charity} />)
  }

  return (
    <section className='charity-cards-section'>
      {fillCharityCards()}
    </section>
  )
}

export default CharityContainer;
