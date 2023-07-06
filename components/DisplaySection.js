import React from "react";
import './DisplaySection.css';
import {Button} from './Buttons';
import jungle from '../videos/jungle.mp4';


export default function DisplaySection() {
  return (
    <>
      <div className="display-container">
        <video        
          src={jungle}
          autoPlay
          muted
          loop
        ></video>
        <div className="content active">
          <h1>
            WELCOME
            <br/>
            <span>TRAVELLERS</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eligendi
            vel. Nesciunt, recusandae explicabo doloribus iste cupiditate
            pariatur eius exercitationem aliquam adipisci ex eligendi quia quis
            iusto! Aspernatur, quo quasi! lorem200
          </p>
          <Button
            className="btns"
            buttonstyle="btn--outline"
            buttonsize='btn--large'
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}
