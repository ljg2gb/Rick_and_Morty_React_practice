import React from 'react';
import Card from './Card.js';

export default function Favorites({favorites, removeFavorite}) {

    const character = favorites.map(favorite =>
         <Card removeFavorite={removeFavorite} character={favorite} />
    ) 

    return (
        <section className="favorites">
            <h3>Favorites</h3>
            {character}
        </section>
  );
}