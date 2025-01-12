import React, { useContext } from 'react';
import { AppContext } from '../App'; 

function GameOver() {
    const { gameOver, correctWord, currAttempt } = useContext(AppContext);
  return (
    <div className = "gameOver">
        <h3>{gameOver.guessedWord ? "CORRECT" : "INCORRECT"} </h3>
        <h1>WORD : {correctWord}</h1>
        {gameOver.guessedWord && <h3>You guessed in {currAttempt.attemptNo} attempts </h3>}
    </div>
  )
}

export default GameOver;