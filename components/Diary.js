import React from "react";
import "./Diary.css";
// import { Button } from "./Buttons";

import zanskar2 from "./images/zanskar2.jpg";
import zanskar1 from "./images/zanskar1.jpg";
import rajasthan1 from "./images/rajasthan1.jpg";
import rajasthan2 from "./images/rajasthan2.jpg";
import { Link } from "react-router-dom";

function Diary() {
  return (
    <>
      <div className="destination">
        <h1>The Explorer's Expedition</h1>
        <p>Learn to Explore more</p>

        <div className="first-des">
          <div className="des-text">
            <h2>Zanskar Valley, Ladakh</h2>
            <p>
              Zanskar, Zahar or Zangskar, is a tehsil of Kargil district, in the
              Indian union territory of Ladakh. The administrative centre is
              Padum. Zanskar, together with the neighboring region of Ladakh,
              was briefly a part of the kingdom of Guge in Western Tibet.
              Zanskar lies 250 km south of Kargil town on NH301.
              <Link to="/">...more</Link>
            </p>
          </div>
          <div className="image">
            <img alt="click" src={zanskar2}></img>
            <img alt="click" src={zanskar1}></img>
          </div>
        </div>

        <div className="second-des">
          <div className="des-text">
            <h2>Udaipur, Rajasthan</h2>
            <p>
              Udaipur, formerly the capital of the Mewar Kingdom, is a city in
              the western Indian state of Rajasthan. Founded by Maharana Udai
              Singh II in 1559, it's set around a series of artificial lakes and
              is known for its lavish royal residences. City Palace, overlooking
              Lake Pichola, is a monumental complex of 11 palaces, courtyards
              and gardens, famed for its intricate peacock mosaics. <br/>
              <Link to="/">...more</Link>
            </p>
          </div>
          <div className="image">
            <img alt="click" src={rajasthan1}></img>
            <img alt="click" src={rajasthan2}></img>
          </div>
        </div>
      <button className="b-btn" >Read more Blogs...</button>
      </div>
    </>
  );
}

export default Diary;
