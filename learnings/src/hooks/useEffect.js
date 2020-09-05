import React, { useEffect, useState } from 'react';

const fetchPokemonDetails = (id, callback) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(({ name, sprites }) => ({ name, img: sprites.front_default }))
    .then(data => callback(data));
};

export default () => {
  const [isStarted, setStarted] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchPokemonDetails(seconds, setPokemon);
  }, [seconds]);

  useEffect(() => {
    if (isStarted) {
      const id = setInterval(() => setSeconds(seconds + 1), 1000);
      return () => clearInterval(id);
    }
  }, [isStarted, seconds]);

  return (
    <div>
      <button onClick={() => setStarted(isStarted => !isStarted)}>
        {isStarted ? 'stop' : 'start'}
      </button>
      {pokemon && (
        <div>
          <p>{pokemon.name}</p>
          <img src={pokemon.img} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
};
