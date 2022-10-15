import React from "react";

function Scores({ scores }) {
    const { xScore, oScore } = scores;

    return (
        <div className="game__container">
            <p className="game__scores">X: {xScore}</p>
            <p className="game__scores">O: {oScore}</p>
        </div>
    );
    
}

export default Scores;