import React from 'react';

import './styles.css'

function Pokemon({name, url}) {
    const pokemonIndex = url.split("/")[url.split("/").length -2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true;`

    return (
        <div className="pokeInfo">
            <h1>#{pokemonIndex}</h1>
            <h1>{name}</h1><br/>
            <img src={imageUrl}/>
        </div>
    );
}

export default Pokemon;