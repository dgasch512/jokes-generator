import React from 'react';
import "../styles/Card.css";

const Card = ({ setup, punchline }) => {
  return (
    <div className="card">
      <div className="iconBox">
        <i class="icon fas fa-brain"></i>
      </div>
      <h2>{setup}</h2>
      <h3>{punchline}</h3>
    </div>
  )
}

export default Card;