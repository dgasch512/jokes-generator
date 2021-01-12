import React, { Component } from 'react';
import { Icon, CardFront, CardBack } from '../styles/Card';
import ReactCardFlip from 'react-card-flip';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    // console.log(isFlipped, id, headline );
  }

  render() {
    let { isFlipped } = this.state;
    const { setup, punchline } = this.props;

    
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        {!isFlipped && (
          <CardFront onClick={this.handleClick}>
            <div>
              <Icon>
              <i className="icon fas fa-brain"></i> 
              </Icon>
              <h2>{setup}</h2>
            </div>  
          </CardFront>
        )}
        {isFlipped && (
          <CardBack onClick={this.handleClick}>
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

}


export default Card;