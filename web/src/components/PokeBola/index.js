import React, { useState, useEffect} from 'react';

import './styles.css';

function PokeBola({children}) {
    const [statusBall, setStatusBall] = useState(false);

    const handleStatusBall = () => {
        setStatusBall(!statusBall);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div id="pokeball-component">
            <div className={statusBall ? "red" : "red openRed" }></div>
            <div className={statusBall ? "divisor" : "divisor openBall"}>
                <button onClick={handleStatusBall}><div className="ball">Clique <br />em mim</div></button>
            </div>
            <div className={statusBall ? "white" : "white openWhite" }></div>

            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default PokeBola;