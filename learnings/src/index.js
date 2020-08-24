import React from 'react';
import ReactDOM from 'react-dom';

// import HelloWorld from './HelloWorld';
import PokemonGallery from './pokemonGallery/Gallery';

ReactDOM.render(
  <React.StrictMode>
    <PokemonGallery pokemonCount={40} />
  </React.StrictMode>,
  document.getElementById('root')
);
