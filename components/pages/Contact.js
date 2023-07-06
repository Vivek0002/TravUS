import React from "react";
import "./Contact.css";
import Footer from "../Footer";
import Nav from "../Nav";
import C4 from "../images/C4.png";
// import conbg from '../images/conbg.jpg'
// import { Form } from "react-router-dom";

function Contact() {
  return (
    <>
      <Nav />
      {/* <div className='c-head'>
      <h1>Contact Us</h1><br/>
      <span>We Would Love to here from You!!</span>
    </div> */}

      
        
      <div className="c-head">

        <div className="contact-info">
          <img src={C4} alt="image" className="c-img"/>
          <h1>
            <b>Contact Us</b>
          </h1>
          <p>We would love to hear from you !</p>
        </div>

        <form
          action="https://formspree.io/f/xvoneljz"
          className="form-input"
          method="POST"
        >
          
            {/* <label>Username : </label> */}
            <input type="text" name="Username" placeholder="Username"required />
            {/* <label>Full Name : </label> */}
            <input type="text" name="Name" placeholder="Name" required />
            {/* <label>Email : </label> */}
            <input type="email" name="Email" placeholder="Email" required />
            {/* <label>Comments :</label> */}
            <textarea type="textarea" name="query" rows='4' placeholder="Your Query"/>
         
         
            <button type="submit" className="lbtn">
            SUBMIT
          </button>
        </form>
      </div>
     
       


      {/* <form action='https://formspree.io/f/xvoneljz' className='form-input' method='POST'>
      <label> Username:
      <input 
        type="text" 
        name="username" 
     
      />
      </label>
      <label>Email:
        <input 
        type="Email" 
          name="Email" 
          
        />
        </label>
        <label>Message :
        <textarea type ="Message" placeholder='Write your Queries'></textarea>
        </label>
        
        <input className='btn' type="submit" value='Submit'/>
        
    </form> */}

      <Footer />
    </>
  );
}

export default Contact;
