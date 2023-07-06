import React from 'react'
import Carditems from './Carditems';
import './Card.css';
import adv from '../images/adv.jpg'
import history from '../images/history.jpg'
import trav from '../images/trav.jpg'
import guide from '../images/guide.jpg'
import beach from '../images/beach.jpg'
import religious from '../images/religious.jpg'


function Card() {
  return (
    <>
       <div className='cards'>
        <h1> Check out these Destinations</h1>
        <p>Explore more travel locations</p>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                    <Carditems
                    src={adv}
                    text= 'Feel the adventure in your veins and thrill your journey'
                    label='Adventure'
                    path='/Explore'
                    />
                    <Carditems
                    src={history}
                    text= 'Get back in Time and saw the history'
                    label='History'
                    path='/Explore'
                    />
                    <Carditems
                    src={religious}
                    text= 'Take some Divine Blessings from God'
                    label='Religious'
                    path='/Explore'
                    />
                </ul>
                    
                <ul className='cards-items'>
                    <Carditems
                    src={guide}
                    text= 'Guide that helps you to explore more'
                    label='Guide'
                    path='/services'
                    />
                    <Carditems
                    src={trav}
                    text= 'Travel Along with Friends and Family'
                    label='travel'
                    path='/'
                    />
                    <Carditems
                    src={beach}
                    text= 'Enjoy Time on beaches and Relaxing Sunsets'
                    label='Beaches'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
       </div>
    </>
  )
}

export default Card
