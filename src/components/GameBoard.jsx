import React from "react";
import Square from "./Square";

function Board(props) {
    return (
        <div className="game__board">
           {
            props.squares.map((num, i) => <Square num={num} key={i} index={i} />)
           }
        </div>
    );
}

export default Board;