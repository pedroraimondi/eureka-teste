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
    <div id="page-list">
      <div className="header">
        <h1>Pokemons</h1>
        <Link to="/" >
          Voltar
        </Link>
      </div>
      <div className="list">
        {pokemons.map(pokemon => {
            return <Pokemon 
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
        })}
      </div>
    </div>
  );
}

export default PokemonsList;