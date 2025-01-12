import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import { gridDefault, generateWordSet } from "./words";
import GameOver from "./components/GameOver";

export const AppContext = createContext();
// to access the state in other components, we need to wrap the parent component in the createContext function

function App() {
    const [grid, setGrid] = useState(gridDefault);
    const [currAttempt, setCurrAttempt] = useState({attemptNo: 0, letterPos: 0});
    const [wordSet, setWordSet] = useState(new Set());
    const [disabledLetters, setDisabledLetters] = useState([]);
    const [alLetters, setAlLetters] = useState([]);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [correctWord, setCorrectWord] = useState("");
    const [gameOver, setGameOver] = useState({gameOver : false, guessedWord : false});

    //using createContext to pass the grid state to the lower components from the parent component

    useEffect(() => {
        generateWordSet().then((words) => {
          setWordSet(words.wordSet);
          setCorrectWord(words.todaysWord.toUpperCase());
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

        if(currWord === correctWord){
            setGameOver({gameOver: true, guessedWord: true});
            return;
        }

        if(currAttempt.attemptNo === 5)
        {
            setGameOver({gameOver: true, guessedWord: false});
            return;
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
            <AppContext.Provider value={{grid, setGrid, currAttempt, setCurrAttempt, onSelectLetter, onEnter, onDelete, correctWord, disabledLetters, setDisabledLetters,alLetters, setAlLetters,correctLetters, setCorrectLetters, gameOver, setGameOver}}>
            <div className = "game">
            <Grid />
            {gameOver.gameOver ? <GameOver /> : <Keyboard /> }
            </div>
            
            </AppContext.Provider>
            {/* evreything inside the AppContext.Provider tag will have access to the grid state */}
        </div>
    );
  }
  
  export default App;
  