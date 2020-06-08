import React, { Component } from 'react';
import MainContainer from './MainContainer.js';
import Favorites from './Favorites.js';
import './App.css';

export default class App extends Component {
  state = {
    characters: [],
    favorites: []
  }

  removeFavorite = (character) => {
    let favorites = this.state.favorites.filter(favorite => favorite !== character)
    this.setState({favorites})
  }

  addToFavorites = (character) => {
    if(!this.state.favorites.find(favorite => character.id === favorite.id)) {
      this.setState({
        favorites: [...this.state.favorites, character]
      })
    }
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(result => this.setState({
        characters: result.results
      })
      )
  } 

  render() {
    return (
      <div className="App">
        <Favorites removeFavorite={this.removeFavorite} favorites={this.state.favorites} />
        <h1>Rick and Morty Characters</h1>
        <MainContainer characters={this.state.characters} addToFavorites={this.addToFavorites}/>
      </div>
    )
  }
}
