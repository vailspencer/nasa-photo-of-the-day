import React, {useState, useEffect} from "react";
import "./App.css";
import LoaderTool from './Components/LoaderTool/LoaderTool.js';
import Photo from './Components/Photo/Photo.js';
import axios from 'axios'

const api_key ='IOUwredz2cVdPgoUZMg9d7OlGyAZjtyM8JY03v5J';
const url = "https://api.nasa.gov/planetary/apod?api_key=IOUwredz2cVdPgoUZMg9d7OlGyAZjtyM8JY03v5J";


function App() {
 

  const [theDate, setDate] = useState();
  const [theTitle, setTitle] =useState();
  const [theUrl, setUrl] = useState();
  const [theExplanation, setExplanation] = useState();
  const [copyright, setCopyRight] = useState()

  useEffect(() => {
    axios.get(url)
    .then (res => {
      console.log(res)
      debugger
    })
    .catch (err => {
      console.log('error')
    })
  })

  return (
    <div className="App">
        <header className = 'header'>
          <p>A header</p>
        </header>
        <div className = 'main-content'>
          <Photo />
          <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun <span role="img" aria-label='go!'>🚀</span>!
          <LoaderTool />
          </p>
        </div>
        <button>Change the date</button>
        <footer>
          <p>This is my footer</p>
        </footer>
    </div>
  );
}

export default App;
