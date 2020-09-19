import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pokemon from '../../components/Pokemon';
import api from '../../services/api';
import './styles.css';

function PokemonsList() {
  
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    api.get('/pokemon?limit=20')
      .then((response) => setPokemons(response.data.results))
      .catch((err) => {
        console.error("Ops! Pcorreu um erro " + err);
      });
  }, []);

  document.body.classList.remove("overflow");

  return (
      <div id="page-list">
        <div className="header">
          <h1>Pokemons</h1>
          <Link to="/" >
            <button className="voltar">VOLTAR</button>
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