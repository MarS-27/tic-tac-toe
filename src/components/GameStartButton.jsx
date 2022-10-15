import React from "react";

function StartButton({ resetGame }) {
    return (
        <button className="game__button" onClick={resetGame}>
            Start new game
        </button>
    );
}

export default StartButton;