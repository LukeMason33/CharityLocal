import React from 'react';
import CharityCard from '../CharityCard/CharityCard.js';
import './CharityContainer.css';
import PropTypes from 'prop-types';

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

CharityContainer.propTypes = {
  charities: PropTypes.array
}
