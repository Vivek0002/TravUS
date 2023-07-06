import React from "react"
import "./About.css"
import { Button } from "../Buttons"
// import beach from '../images/beach.jpg'

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h1>About Us</h1>
          <h2>
            We <b>provide Solution</b> to grow your business
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
          <Button className = 'primary-btn'>
            Explore More 
          </Button>
        </div>
        {/* <div className='row image'>
          <img src={beach} alt='' />
          <div className='control-btn'>
            <button className='prev'>
              <i className='fa fa-play'></i>
            </button>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default AboutCard