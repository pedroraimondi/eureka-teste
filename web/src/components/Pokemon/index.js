import React, { useEffect, useState } from 'react';
import capitalizeFistLetter from '../../util/capitalizeFistLetter';

import './styles.css'

function Pokemon({name, url}) {
    const pokemonIndex = url.split("/")[url.split("/").length -2] === '893' ? console.log("CHEGOU") : url.split("/")[url.split("/").length -2]; 
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

    return (
        <div className="pokemon">
            <img src={imageUrl} />
            <div className="pokemonInfo">
                <h3>#{pokemonIndex}</h3>
                <h2>{capitalizeFistLetter(name)}</h2>
            </div>
        </div>
    );
}

export default Pokemon;