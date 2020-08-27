import React from 'react';
import ReactDOM from 'react-dom';

// import HelloWorld from './HelloWorld';
// import PokemonGallery from './pokemonGallery/PokemonGallery';
// import Counter from './counter/Counter.js';
import TicTacToe from './ticTacToe/TicTacToe.js';

ReactDOM.render(
  <React.StrictMode>
    <TicTacToe />
  </React.StrictMode>,
  document.getElementById('root')
);
