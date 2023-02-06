import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const buscarPokemon = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
          return response.data;
        }).then(response => {
          console.log(response.results);
          setPokemon(response.results.map((item) => item.name));
        }).catch(err => {
          console.log(err);
        });
  }
  return (
    <div className="App">
      <button onClick={buscarPokemon} className='boton'>Fetch Pokemon</button>
      <ul>
        {
          pokemon.map((item, idx) => <li key={idx}>{item}</li>)
        }
      </ul>
    </div>
  );
}

export default App;

