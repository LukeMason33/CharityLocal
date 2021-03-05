import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const LandingPageForm = () => {
  const [category, setCategory] = useState('');
  const [stateInput1, setStateInput1] = useState('');
  const [cityInput1, setCityInput1] = useState('');
  const [stateInput2, setStateInput2] = useState('');
  const [cityInput2, setCityInput2] = useState('');
  const [activeLink1, setActiveLink1] = useState(false);
  const [activeLink2, setActiveLink2] = useState(false);

  return (
    <form className='landing-page-form'>
      <section className='select-category-section'>
        <div className='charity-search-header-container'>
          <h3 className='charity-search-header'>Find Local Charities</h3>
        </div>
        <div className='select-category-input-container'>
          <label for='select-category'>Choose a Category of Charity</label>
          <select
            name='select-category'
            className='select-category'
            onChange={event => setCategory(event.target.value)}>
          </select>
        </div>
        <div className='select-location-container'>
          <div className='state-container'>
            <label for='select-state'>State</label>
            <select
              name='select-state'
              className='select-state'
              onChange={event => setStateInput1(event.target.value)}>
            </select>
          </div>
          <div className='city-container'>
            <label for='select-city'>City</label>
            <select
              name='select-city'
              className='select-city'
              onChange={event => setCityInput1(event.target.value)}>
            </select>
          </div>
        </div>
        <Link to='/dashboard'>
          <button disabled='true'>Find Charities</button>
        </Link>
      </section>
      <section className='black-charity-section'>
        <div className='charity-search-header-container'>
          <h3 className='charity-search-header'>Find Local Black Charities</h3>
          <p className='charity-search-description'>If you would like to find local Black charities to support, fill out the following fields:</p>
        </div>
        <div className='select-location-container'>
          <div className='state-container'>
            <label for='select-state'>State</label>
            <select
              name='select-state'
              className='select-state'
              onChange={event => setStateInput2(event.target.value)}>
            </select>
          </div>
          <div className='city-container'>
            <label for='select-city'>City</label>
            <select
              name='select-city'
              className='select-city'
              onChange={event => setCityInput2(event.target.value)}>
            </select>
          </div>
        </div>
        <Link to='/dashboard'>
          <button disabled='true'>Find Charities</button>
        </Link>
      </section>
    </form>
  )
}

export default LandingPageForm;

// <option value="volvo">Volvo</option> need this for each state/category
// onChange events for all selects
