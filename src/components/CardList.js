import React from "react";
import Card from "./Card";
import { CardBox } from "../styles/Card";


const CardList = ({ jokes, isFlipped }) => {
  return (
      <CardBox>
        {
          jokes.map((joke, i) => {
            return (
                <Card 
                  key={jokes[i].id}
                  isFlipped={isFlipped}
                  setup={jokes[i].setup}
                  punchline={jokes[i].punchline}
                />
            );
          })
        }
      </CardBox>

  )
}

export default CardList;