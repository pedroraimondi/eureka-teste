import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pokemon from '../../components/Pokemon';
import api from '../../services/api';
import './styles.css';

function PokemonsList() {
  
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  function handleOffsetPrev(){
    const prevOffset = offset == 0 ? 0 : offset-10;
    setOffset(prevOffset);
    api.get(`/pokemon?limit=10&offset=${prevOffset}`).then((response) => setPokemons(response.data.results));
  }

  function handleOffsetNext(){
      const nextOffset = offset == 790 ? 790 : offset+10;
      setOffset(nextOffset);
      api.get(`/pokemon?limit=10&offset=${nextOffset}`).then((response) => setPokemons(response.data.results));
    }
  
  useEffect(() => {
    api.get(`/pokemon?limit=10&offset=${offset}`)
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
        <div className="controler">
          <button onClick={handleOffsetPrev}><div className={offset == 0 ? "noPrev" : "prev"}></div></button>
          <button onClick={handleOffsetNext}><div className={offset == 1050 ? "noNext" : "next"}></div></button>
        </div>
        <div className="controler-phone">
          <button onClick={handleOffsetPrev}><div className={offset == 0 ? "noPrev" : "prev"}></div></button>
          <button onClick={handleOffsetNext}><div className={offset == 1050 ? "noNext" : "next"}></div></button>
        </div>
      </div>
  );
}

export default PokemonsList;