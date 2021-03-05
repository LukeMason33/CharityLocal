import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const LandingPageForm = () => {
  const [category, setCategory] = useState('');
  const [stateInput1, setStateInput1] = useState('');
  const [cityInput1, setCityInput1] = useState('');
  const [stateInput2, setStateInput2] = useState('');
  const [cityInput2, setCityInput2] = useState('');

  return (
    <form className='landing-page-form'>
      <section className='select-category-section'>
        <div className='select-category-input-container'>
          <label for='select-category'>Choose a Category of Charity</label>
          <select name='select-category' className='select-category'>
          </seclect>
        </div>
        <div className='select-location-container'>
          <div className='state-container'>
            <label for='select-state'>State</label>
            <select name='select-state' className='select-state'>
            </select>
          </div>
          <div className='city-container'>
            <label for='select-city'>City</label>
            <select name='select-city' className='select-city'>
            </select>
          </div>
        </div>
      </section>
    </form>
  )
}

export default LandingPageForm;
