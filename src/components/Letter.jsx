import React, { useContext, useEffect} from 'react';
import { AppContext } from '../App';

function Letter({ letterPos, attemptNo}) {
    const { grid, correctWord, currAttempt, setDisabledLetters, setAlLetters, setCorrectLetters} = useContext(AppContext);
    const letter = grid[attemptNo][letterPos];

    const correct = correctWord[letterPos] === letter;
    const almost = !correct && letter !== "" && correctWord.includes(letter);

    const letterState = currAttempt.attemptNo > attemptNo && (correct ? "correct" : almost ? "almost" : "error");
    useEffect(()=>{
        if(letter!=="" && letterState === "error")
        {
            setDisabledLetters((prev)=>[...prev, letter]);
        }
    },[currAttempt.attemptNo]);

    useEffect(()=>{
        if(letter !== "" && letterState === "almost")
        {
            setAlLetters((prev)=>[...prev, letter]);
        }
    },[currAttempt.attemptNo]);

    useEffect(()=>{
        if(letter !== "" && letterState === "correct")
        {
            setCorrectLetters((prev)=>[...prev, letter]);
        }
    },[currAttempt.attemptNo]);


  return (
    <div className='letter' id = {letterState}>{letter}</div>
  )
}

export default Letter;