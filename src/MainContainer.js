import React from 'react';
import CardContainer from './CardContainer';

export default function MainContainer({characters, addToFavorites}) {
  return (
    <div className="main-container">
        <CardContainer characters={characters} addToFavorites={addToFavorites} />
    </div>
  );
}