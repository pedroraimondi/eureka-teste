import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import PokeBola from '../../components/PokeBola';
import pokedexImg from '../../images/pokedex.png';

function Home() {
  return (
    <PokeBola>
      <h1 className="title">Parabéns! <br />Você encontrou o manual pokemon</h1>
        <Link to="/listpokemons" className="container">
          <img 
            src={pokedexImg} 
            alt="Pokedex" 
            className="pokedex"
          />
        </Link>
        <p>clique no pokedex</p>
    </PokeBola>
  );
}
  
export default Home;
  