import React from "react";
import Card from "./Card";
import "../styles/Card.css";


const CardList = ({ jokes }) => {
  return (
    <div className="cardGrid">
      {
        jokes.map((joke, i) => {
          return (
            <Card 
              key={i}
              id={jokes[i].id}
              setup={jokes[i].setup}
              punchline={jokes[i].punchline}
            />
          );
        })
      }
    </div>
  )
}

export default CardList;