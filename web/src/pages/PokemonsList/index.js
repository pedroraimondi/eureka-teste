import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pokemon from '../../components/Pokemon';
import api from '../../services/api';
import './styles.css';
// import { Container } from './styles';

function PokemonsList() {
  
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    api.get('/pokemon?limit=100')
      .then((response) => setPokemons(response.data.results))
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      });
  }, []);


  return (
    <body className="overflow">
      <div id="page-list">
        <div className="header">
          <h1>Pokemons</h1>
          <Link to="/" >
            <button>VOLTAR</button>
          </Link>
        </div>
        <div className="list">
          {pokemons.map(pokemon => {
              console.log(pokemon)
              return <Pokemon 
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                // pokemon={pokemon.sprites.front_default}
              />
              
          })}
        </div>
        Next Page
      </div>
    </body>
  );
}

export default PokemonsList;