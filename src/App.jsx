import React, { useState } from 'react';
import './App.css';
import Board from './components/GameBoard';
import Status from './components/Status';
import winnerCheck from './services/winnerCheck';
import StartButton from './components/GameStartButton';
import Context from './context';
import Scores from './components/Scores';
import ResetScores from './components/ResetScores';

function App() {

  const [ squares, setSquares ]  = useState(Array(9).fill(null));
  const [ nextStep, setNextStep ] = useState(true);
  const [ scores, setScores ] = useState({xScore: 0, oScore: 0});

  const winner = winnerCheck(squares);

  function playerStep(index) {
    if (squares[index] || winner) return;

    setNextStep(!nextStep);

    setSquares(
      squares.map((square, i) => {
        if (i === index && nextStep) {
          square = "X"; 
        } else if (i === index && !nextStep) {
          square = "O";
        }
        return square;
      })
    );
  }

  function resetGame() {
    setSquares(Array(9).fill(null)); 
    setNextStep(true);

    if (winner === "X") {
      let { xScore } = scores;
      xScore += 1;
      setScores({ ...scores, xScore });
    } else if (winner === "O") {
      let { oScore } = scores;
      oScore += 1;
      setScores({ ...scores, oScore });
    } 
  }

  function resetScores() {
    setScores({xScore: 0, oScore: 0});
  }

  return (
    <Context.Provider value={{ playerStep }}>
      <div className="game">
        <Status nextStep={nextStep} winner={winner} />
        <Scores scores={scores} />
        <Board squares={squares} />
        <div className="game__container">
          <StartButton resetGame={resetGame} />
          <ResetScores resetScores={resetScores} />
        </div>
      </div>
    </Context.Provider>  
  );
}

export default App;
