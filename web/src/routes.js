import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home'
import PokemonsList from './pages/PokemonsList';
function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/listpokemons" exact component={PokemonsList} />
        </BrowserRouter>
    )
}

export default Routes;