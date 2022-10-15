import React, { useContext } from "react";
import Context from "../context";

function Square( { num, index } ) {
    const { playerStep } = useContext(Context);

    return (
        <button 
            className="game__board__square"
            value={num}
            onClick={playerStep.bind(null, index)}
        >
            {num}
        </button>
    );
}

export default Square;
