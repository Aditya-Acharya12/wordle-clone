import React, { useCallback, useEffect, useContext } from 'react'
import { AppContext } from '../App';
import Key from './Key';

function Keyboard() {
  const {onSelectLetter, onEnter, onDelete,disabledLetters,alLetters,correctLetters} = useContext(AppContext);
  const keys1 = ["Q","W","E","R","T","Y","U","I","O","P"];
  const keys2 = ["A","S","D","F","G","H","J","K","L"];
  const keys3 = ["Z","X","C","V","B","N","M"];

  const handleKeyboard = useCallback((e) => {
    if (e.key === "Enter") {
        onEnter();
    }
    else if (e.key === "Backspace") {
        onDelete();
    }
    else {
        const letter = e.key.toUpperCase();
        // Combine all keys into one array and check once
        const allKeys = [...keys1, ...keys2, ...keys3];
        if (allKeys.includes(letter)) {
            onSelectLetter(letter);
        }
    }
}); 

useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
        document.removeEventListener("keydown", handleKeyboard); // Fixed typo in 'document'
    };
}, [handleKeyboard]);


  return (
    <div className = "keyboard" onKeyDown={handleKeyboard}>
      <div className = "line1">
        {keys1.map((key)=>{
          return <Key keyVal = {key} disabled={disabledLetters.includes(key)} yellow={alLetters.includes(key)} green={correctLetters.includes(key)}/>;
        })
        }
      </div>
      <div className = "line2">
        {keys2.map((key)=>{
          return <Key keyVal = {key} disabled={disabledLetters.includes(key)} yellow={alLetters.includes(key)} green={correctLetters.includes(key)}/>;
        })
        }</div>
      <div className = "line3">
      <Key keyVal = {"ENTER"} bigKey={true}/>
        {keys3.map((key)=>{
          return <Key keyVal = {key} disabled={disabledLetters.includes(key)} yellow={alLetters.includes(key)} green={correctLetters.includes(key)}/>;
        })}
        <Key keyVal = {"DELETE"} bigKey={true}/>
        </div>
    </div>
  )
}

export default Keyboard;