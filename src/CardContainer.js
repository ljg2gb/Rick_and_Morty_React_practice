import React from 'react';
import Card from './Card.js';

export default function CardContainer({characters, addToFavorites}) {
    const aCharacter = characters.map(character => {
        return <Card character={character} addToFavorites={addToFavorites} />
    })
  return (
    <div className="card-container">
        {aCharacter}
    </div>
  );
}