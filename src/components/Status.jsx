import React from "react";

function Status({ nextStep, winner }) {

    return (
        <p className="game__status">
            {winner ? `Winner: ${winner}` : `Next player: ${nextStep ? "X" : "O"}`}
        </p>
    );
}

export default Status;