import React from 'react';
import axios from 'axios';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, pokemon: null };
  }

  componentDidMount() {
    const url = `https://pokeapi.co/api/v2/pokemon/${this.props.id}`;
    axios.get(url).then(res => {
      const details = res.data;
      const { front_default } = details.sprites;
      const pokemon = { name: details.name, imgURL: front_default };
      this.setState(() => ({ loaded: true, pokemon }));
    });
  }

  render() {
    if (!this.state.loaded) return React.createElement('p', null, 'Loading...');
    const { imgURL, name } = this.state.pokemon;
    const style = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: 100,
      textAlign: 'center',
      margin: 10,
    };
    return (
      <div style={style}>
        <img src={imgURL} alt={name} />
        <span>{name}</span>
      </div>
    );
  }
}
export default Pokemon;
