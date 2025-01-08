import React, { useState } from "react";
import "./App.css";

function App() {
    return(
        <div className="App">
            <nav>
                <h1>Wordle</h1>
            </nav>
            <Grid />
            <Keyboard />
        </div>
    );
  }
  
  export default App;
  