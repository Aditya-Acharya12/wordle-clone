import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import { gridDefault, generateWordSet } from "./words";

export const AppContext = createContext();
// to access the state in other components, we need to wrap the parent component in the createContext function

function App() {
    const [grid, setGrid] = useState(gridDefault);
    const [currAttempt, setCurrAttempt] = useState({attemptNo: 0, letterPos: 0});
    const [wordSet, setWordSet] = useState(new Set());
    const correctWord = "RIGHT";
    //using createContext to pass the grid state to the lower components from the parent component

    useEffect(() => {
        generateWordSet().then((words) => {
          setWordSet(words.wordSet);
        });
      }, []);

    const onSelectLetter = (keyVal) => {
        if(currAttempt.letterPos === 5) return;
        const newGrid = [...grid];
        newGrid[currAttempt.attemptNo][currAttempt.letterPos] = keyVal;
        setGrid(newGrid);
        setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos +1});
    }

    const onEnter = () => {
        if(currAttempt.letterPos !== 5)return;

        let currWord = "";
        grid[currAttempt.attemptNo].forEach((letter) => {
            currWord += letter;
        });

        if(wordSet.has(currWord.toLowerCase())){
            setCurrAttempt({attemptNo: currAttempt.attemptNo + 1, letterPos : 0});
        }
        else{
            alert("Invalid word");
        }
    }

    const onDelete = () => {
        if(currAttempt.letterPos === 0) return;
        const newGrid = [...grid];
        newGrid[currAttempt.attemptNo][currAttempt.letterPos - 1] = "";
        setGrid(newGrid);
        setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos -1});
    }

    return(
        <div className="App">
            <nav>
                <h1>Wordle</h1>
            </nav>
            <AppContext.Provider value={{grid, setGrid, currAttempt, setCurrAttempt, onSelectLetter, onEnter, onDelete, correctWord}}>
            <div className = "game">
            <Grid />
            <Keyboard />
            </div>
            
            </AppContext.Provider>
            {/* evreything inside the AppContext.Provider tag will have access to the grid state */}
        </div>
    );
  }
  
  export default App;
  