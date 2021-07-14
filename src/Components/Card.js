import React from "react";
import "../styles/card.css";

function Card() {
  return (
    <div className="cardContainer">
      <div className="cardImage"></div>
      <div className="cardContent">
        <div className="cardTitle">
          <h4>Title</h4>
        </div>
        <div className="cardText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    </div>
  );
}

export default Card;
