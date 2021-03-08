import React from 'react';
import {Link} from 'react-router-dom';
import './About.css';
import myPhoto from '../../assets/myPhoto.png';

const AboutPage = ({charities}) => {

  const renderBackToCharitiesBtn = () => {
    if (charities.length > 0) {
      return (
        <Link to='/dashboard'>
          <button className='to-dashboard-page-btn'>Back to Charities</button>
        </Link>
      )
    }
  }

  return (
    <section className='about-page'>
      <article className='author'>
        <h2 className='author-title'>App Author</h2>
        <img className='author-img' src={myPhoto} alt='Man smiling in a snowy mountain setting'/>
        <a className='linn-to-github' href=''>Luke Mason</a>
      </article>
      <article className='app-desrciption'>
        <h2 className='description-header'>Why Create This App?</h2>
        <p className='description-text'>I am a student at Turing School of Software and Design. Here, we are exposed to a very strong sense of community and a huge emphasis on developer empathy, and empathy in general. For this application, I wanted to transfer the same ideas. Those ideas being that community is essential, and what better way to give back to your community than to donate to local charities. There's a lot of unfairness in this world, and this is my way to help give back to local communities, as well as support people/businesses that are struggling to support themselves.</p>
      </article>
      <article className='resources'>
        <h2 className='resources-header'>Resources</h2>
        <p className='resources-text'>For the data used on this website, I utilized <a className='data-link' href='https://www.charitynavigator.org/?c_src=WPAIDSEARCH&gclid=Cj0KCQiAs5eCBhCBARIsAEhk4r54ZiQTmEy7R4asgI-xObNIrf2473cNbYdalukIsrmr_l2iFSQF5kYaAuSmEALw_wcB'>Charity Navigator's</a> API.</p>
      </article>
      <div className='btns-container'>
        <Link to='/'>
          <button className='to-landing-page-btn'>Back to Charity Search</button>
        </Link>
        {renderBackToCharitiesBtn()}
      </div>
    </section>
  )
}

export default AboutPage;
