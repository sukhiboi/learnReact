import React from 'react';
import ReactDOM from 'react-dom';

// import HelloWorld from './HelloWorld';
// import PokemonGallery from './pokemonGallery/PokemonGallery';
// import Counter from './counter/Counter.js';
import TicTacToe from './ticTacToe/TicTacToe.js';

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

ReactDOM.render(
  <React.StrictMode>
    <TicTacToe winningCombinations={winningCombinations} />
  </React.StrictMode>,
  document.getElementById('root')
);
