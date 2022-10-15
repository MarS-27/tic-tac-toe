import React from "react";

function ResetScores({ resetScores }) {
    return (
        <button className="game__button" onClick={resetScores}>
            Reset scores
        </button>
    );
}

export default ResetScores;