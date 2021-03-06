import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {categoryData, stateData} from '../../stateAndCategoryData.js';
import './LandingPageForm.css';
import PropTypes from 'prop-types';

const LandingPageForm = ({fetchCharitiesByCategory, error, clearError}) => {
  const [category, setCategory] = useState('');
  const [stateInput1, setStateInput1] = useState('');
  const [cityInput1, setCityInput1] = useState('');
  const [disableLink1, setDisabledLink1] = useState(true);
  const [errorMessage, setError] = useState(error);

  const fillOptionsForInputs = (optionsData) => {
    return optionsData.map((data, index) => <option key={index} value={data.id}>{data.value}</option>);
  }

  const clearErrorMessageAfterClick = () => {
    setError('');
    clearError();
  }

  useEffect(() => {
    if(category && stateInput1 && cityInput1) {
      setDisabledLink1(false);
    } else {
      setDisabledLink1(true);
    }
  }, [category, stateInput1, cityInput1])

  return (
    <form className='landing-page-form'>
      <section className='select-category-section'>
        <div className='charity-search-header-container'>
          <h3 className='charity-search-header'>Find Local Charities</h3>
          {errorMessage && <p className='error'>{errorMessage}</p>}
        </div>
        <div className='select-category-input-container'>
          <label>Choose a Category of Charity
            <select
              name='select-category'
              className='select-category'
              onChange={event => setCategory(event.target.value)}
              onClick={clearErrorMessageAfterClick}>
              <option value=''>--Select a Category--</option>
              {fillOptionsForInputs(categoryData)}
            </select>
          </label>
        </div>
        <div className='select-location-container'>
          <div className='state-container'>
            <label htmlFor='select-state'>State
              <select
                name='select-state'
                className='select-state'
                onChange={event => setStateInput1(event.target.value)}>
                  <option value=''>--Select a State--</option>
                  {fillOptionsForInputs(stateData)}
              </select>
            </label>
          </div>
          <div className='city-container'>
            <label htmlFor='select-city'>City
              <input
                name='select-city'
                className='select-city'
                type='text'
                placeholder='City Name'
                onChange={event => setCityInput1(event.target.value)}>
              </input>
            </label>
          </div>
        </div>
        <Link to='/dashboard'>
          <button className='find-charities-btn' disabled={disableLink1} onClick={event => fetchCharitiesByCategory(stateInput1, cityInput1, category)}>Find Charities</button>
        </Link>
      </section>
    </form>
  )
}

export default LandingPageForm;

LandingPageForm.propTypes = {
  fetchCharitiesByCategory: PropTypes.func,
  error: PropTypes.string,
  clearError: PropTypes.func
}
