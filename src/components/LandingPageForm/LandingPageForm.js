import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {categoryData, stateData} from '../../stateAndCategoryData.js';
import './LandingPageForm.css';

const LandingPageForm = () => {
  const [category, setCategory] = useState('');
  const [stateInput1, setStateInput1] = useState('');
  const [cityInput1, setCityInput1] = useState('');
  const [stateInput2, setStateInput2] = useState('');
  const [cityInput2, setCityInput2] = useState('');
  const [disableLink1, setDisabledLink1] = useState(true);
  const [disableLink2, setDisabledLink2] = useState(true);

  const fillOptionsForInputs = (optionsData) => {
    return optionsData.map(data => <option value={data.id}>{data.value}</option>);
  }

  useEffect(() => {
    if(category && stateInput1 && cityInput1) {
      setDisabledLink1(false);
    } else {
      setDisabledLink1(true);
    }
  }, [category, stateInput1, cityInput1])

  useEffect(() => {
    if(stateInput2 && cityInput2) {
      setDisabledLink2(false);
    } else {
      setDisabledLink2(true);
    }
  }, [stateInput2, cityInput2])

  return (
    <form className='landing-page-form'>
      <section className='select-category-section'>
        <div className='charity-search-header-container'>
          <h3 className='charity-search-header'>Find Local Charities</h3>
        </div>
        <div className='select-category-input-container'>
          <label htmlFor='select-category'>Choose a Category of Charity</label>
          <select
            name='select-category'
            className='select-category'
            onChange={event => setCategory(event.target.value)}>
            <option value=''>--Choose a Category--</option>
            <option value='t'>test</option>
          </select>
        </div>
        <div className='select-location-container'>
          <div className='state-container'>
            <label htmlFor='select-state'>State</label>
            <select
              name='select-state'
              className='select-state'
              onChange={event => setStateInput1(event.target.value)}>
                <option value=''>--Select A State--</option>
            </select>
          </div>
          <div className='city-container'>
            <label htmlFor='select-city'>City</label>
            <input
              name='select-city'
              className='select-city'
              type='text'
              placeholder='City Name'
              onChange={event => setCityInput1(event.target.value)}>
            </input>
          </div>
        </div>
        <Link to='/dashboard'>
          <button className='find-charities-btn' disabled={disableLink1}>Find Charities</button>
        </Link>
      </section>
      <section className='black-charity-section'>
        <div className='charity-search-header-container'>
          <h3 className='charity-search-header'>Find Local Black Charities</h3>
          <p className='charity-search-description'>If you would like to find local Black charities to support, fill out the following fields:</p>
        </div>
        <div className='select-location-container'>
          <div className='state-container'>
            <label htmlFor='select-state'>State</label>
            <select
              name='select-state'
              className='select-state'
              onChange={event => setStateInput2(event.target.value)}>
              <option value=''>--Select A State--</option>
              <option value='t'>test</option>
            </select>
          </div>
          <div className='city-container'>
            <label htmlFor='select-city'>City</label>
            <input
              name='select-city'
              className='select-city'
              type='text'
              placeholder='City Name'
              onChange={event => setCityInput2(event.target.value)}>
            </input>
          </div>
        </div>
        <Link to='/dashboard'>
          <button className='find-charities-btn' disabled={disableLink2}>Find Charities</button>
        </Link>
      </section>
    </form>
  )
}

export default LandingPageForm;

// <option value="volvo">Volvo</option> need this for each state/category
// onChange events for all selects
