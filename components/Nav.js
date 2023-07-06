import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
// import { Button } from "./Buttons";



export default function Head() {
  const [click, setclick] = useState(false);



  const handleclick = () => setclick(!click);
  const closemobilemenu = () => setclick(false);
  return (
    <>
      <header>
        <Link to="/" className="brand">
          TravUs
        </Link>
        <div className="menu-btn">
          {/* <i className={click ? "fa fa-times" : "fa fa-bars"}></i> */}

        </div>
        <div className="navigation" onClick={handleclick}>
          {/* <div className={click ? "nav-menu active" : "nav-menu"}> */}
          <div className='nav-items'>
            <Link to="/Contact" onClick={closemobilemenu}>
              Contact
            </Link>
            <Link to="/Explore" onClick={closemobilemenu}>
              Explore
            </Link>
            <Link to="/About" onClick={closemobilemenu}>
              About Us
            </Link>
            <Link to="/" onClick={closemobilemenu}>
              Bookings
            </Link>
  
  
            

            

          
             </div>
            
        </div>
      </header>
    </>
  );
}
