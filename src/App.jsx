import React, { useState } from "react";
import "./App.css";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import { createContext } from "react";
import { gridDefault } from "./words";

export const AppContext = createContext();
// to access the state in other components, we need to wrap the parent component in the createContext function

function App() {
    const [grid, setGrid] = useState(gridDefault);
    //using createContext to pass the grid state to the lower components from the parent component
    return(
        <div className="App">
            <nav>
                <h1>Wordle</h1>
            </nav>
            <AppContext.Provider value={{grid, setGrid}}>
            <Grid />
            <Keyboard />
            </AppContext.Provider>
            {/* evreything inside the AppContext.Provider tag will have access to the grid state */}
        </div>
    );
  }
  
  export default App;
  