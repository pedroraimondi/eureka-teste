import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import PokeBola from '../../components/PokeBola';
import pokedexImg from '../../images/pokedex.png';

function Home() {
  return (
    <PokeBola>
      <h1>Parabéns! <br />Você encontrou o manual pokemon</h1><p>clique no pokedex</p>
        <Link to="/listpokemons" className="container">
          <img 
            src={pokedexImg} 
            alt="Pokedex" 
            className="pokedex"
          />
        </Link>
    </PokeBola>
  );
}
  
export default Home;
  