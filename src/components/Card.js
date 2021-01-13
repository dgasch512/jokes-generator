import React, { useState } from 'react';
import { Icon, CardFront, CardBack } from '../styles/Card';
import ReactCardFlip from 'react-card-flip';

function Card( { setup, punchline}) {
  // constructor() {
  //   super();
  //   this.state = {
  //     isFlipped: false
  //   }
  //   this.handleClick = this.handleClick.bind(this);
  // }

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(state => !state);
    console.log(isFlipped);
  }

    // let { isFlipped } = this.state;
    // const { setup, punchline } = this.props;


    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        {!isFlipped && (
          <CardFront onClick={handleClick}>
            <div>
              <Icon>
              <i className="icon fas fa-brain"></i> 
              </Icon>
              <h2>{setup}</h2>
            </div>  
          </CardFront>
        )}
        {isFlipped && (
          <CardBack onClick={handleClick}>
            <div>
              <Icon>
              <i className="icon fas fa-brain"></i> 
              </Icon>
              <h2>{punchline}</h2>
            </div>  
          </CardBack>
        )}


      </ReactCardFlip>    
    )

}


export default Card;