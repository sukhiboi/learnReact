// api => https://pokeapi.co/api/v2/pokemon/pokeId

const getPokemonDetails = function (id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return fetch(url).then(res => res.json());
};

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, pokemon: null };
  }

  componentDidMount() {
    getPokemonDetails(this.props.id).then(details => {
      const { front_default } = details.sprites;
      const pokemon = { name: details.name, imgURL: front_default };
      this.setState(() => ({ loaded: true, pokemon }));
    });
  }

  render() {
    if (!this.state.loaded) return React.createElement('p', null, 'Loading...');
    const { imgURL, name } = this.state.pokemon;
    const pokemonImage = React.createElement('img', { src: imgURL, alt: name });
    const pokemonName = React.createElement('span', null, name);
    const style = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: 100,
      textAlign: 'center',
      margin: 10,
    };
    return React.createElement('div', { style }, pokemonImage, pokemonName);
  }
}

const createPokemonGallery = function (pokemonCount) {
  const pokemonIds = Array.from({ length: pokemonCount }).map((_, id) => ++id);
  const pokemons = pokemonIds.map(id => {
    return React.createElement(Pokemon, { id, key: id });
  });
  const style = { display: 'flex', flexWrap: 'wrap' };
  return React.createElement('div', { style }, pokemons);
};

const root = document.getElementById('root');
const gallery = createPokemonGallery(30);
ReactDOM.render(gallery, root);
