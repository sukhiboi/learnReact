import React from 'react';
import Pokemon from './Pokemon.js';

const PokemonGallery = function (props) {
  const length = props.pokemonCount;
  const pokemonIds = Array.from({ length }).map((_, id) => ++id);
  const pokemons = pokemonIds.map(id => {
    return <Pokemon id={id} key={id} />;
  });
  const galleryStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Pokemon Gallery</h1>
      <div style={galleryStyles}>{pokemons}</div>
    </div>
  );
};

export default PokemonGallery;
