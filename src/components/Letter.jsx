import React, { useContext, useEffect, useState} from 'react';
import { AppContext } from '../App';

function Letter({ letterPos, attemptNo}) {
    const [flip, setFlip] = useState(false);
    const [filled, setFilled] = useState(false);
    const [finalClass, setFinalClass] = useState("");
    const { grid, correctWord, currAttempt, setDisabledLetters, setAlLetters, setCorrectLetters} = useContext(AppContext);
    const letter = grid[attemptNo][letterPos];

    const correct = correctWord[letterPos] === letter;
    const almost = !correct && letter !== "" && correctWord.includes(letter);

    const letterState = currAttempt.attemptNo > attemptNo && (correct ? "correct" : almost ? "almost" : "error");
    useEffect(() => {
        if (currAttempt.attemptNo > attemptNo) {
            setTimeout(() => {
                setFlip(true);
            }, letterPos * 200); // Delay based on letter position
        }
    }, [currAttempt.attemptNo]);

    useEffect(() => {
        if (letter !== "") {
          setFilled(true); // Update state when the letter is filled
        } else {
          setFilled(false); // Update state when the letter is empty
        }
      }, [letter]);

    const handleAnimationEnd = () => {
        // Apply the persistent class after animation ends
        if (letterState === "correct") setFinalClass("persistent-correct");
        if (letterState === "almost") setFinalClass("persistent-almost");
        if (letterState === "error") setFinalClass("persistent-error");
      };   

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
    <div 
    className={`letter ${flip ? "flip" : filled ? "filled" : ""} ${finalClass}`} // Add persistent class
    data-pos={letterPos}
    onAnimationEnd={handleAnimationEnd}

        >
            {letter}
        </div>
  )
}

export default Letter;