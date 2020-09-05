import React, { useEffect, useState } from 'react';

const fetchPokemonDetails = (id, callback) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(({ name, sprites }) => ({ name, img: sprites.front_default }))
    .then(data => callback(data));
};

export default props => {
  const [seconds, setSeconds] = useState(() => NaN);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchPokemonDetails(seconds, setPokemon);
  }, [seconds]);

  useEffect(() => {
    document.title = `${seconds} seconds passed`;
  });

  useEffect(() => {
    const id = setInterval(() => setSeconds(seconds => seconds + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      {isNaN(seconds) ? (
        <button onClick={() => setSeconds(1)}>start</button>
      ) : (
        <></>
      )}

      {pokemon ? (
        <div>
          <p>{pokemon.name}</p>
          <img src={pokemon.img} alt={pokemon.name} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
