import React, {useEffect, useState} from "react";
import "./App.css";
import LoaderTool from './Components/LoaderTool/LoaderTool.js';
import Photo from './Components/Photo/Photo.js';
import axios from 'axios'


function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
