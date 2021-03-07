import React, {useState} from 'react';

const CharityContainer = ({charities}) => {

  const fillCharityCards () => {
    charities.map(charity => < CharityCard charity={charity} />)
  }

  return (
    <section className='charity-cards-section'>
      {fillCharityCards()}
    </section>
  )
}
