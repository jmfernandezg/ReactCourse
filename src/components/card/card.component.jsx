import React from 'react';
import './card.styles.css'

export const Card = (props) => (
  <div className='card-container'>
  <img alt='moster' src={`https://robohash.org/${props.monster.id}?size=180x180&set=4`} />
  <h2>{props.monster.name}</h2>
  <p>{props.monster.email}</p>
  </div>
)