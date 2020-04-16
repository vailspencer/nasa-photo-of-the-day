import React, {useState, useEffect} from "react";
import "./App.css";
import LoaderTool from './Components/LoaderTool/LoaderTool.js';
import Photo from './Components/Photo/Photo.js';
import axios from 'axios'

const api_key ='IOUwredz2cVdPgoUZMg9d7OlGyAZjtyM8JY03v5J';
const url = "https://api.nasa.gov/planetary/apod?api_key=IOUwredz2cVdPgoUZMg9d7OlGyAZjtyM8JY03v5J";


function App() {
 

  const [theDate, setDate] = useState();

  const [theUrl, setUrl] = useState();

  const [theTitle, setTitle] =useState();

  const [theExplanation, setExplanation] = useState();

  const [copyright, setCopyRight] = useState();

  useEffect(() => {
    axios.get(url)
    .then (res => {
      setDate(res.data.date)
      setTitle(res.data.title)
      setUrl(res.data.url)
      setExplanation(res.data.explanation)
      setCopyRight(res.data.copyright)
      console.log(res)
    })
    .catch (err => console.log('err'));
    }, [])

    if (!theUrl) return <LoaderTool />;
  return (
    <div className="App">
        <header className = 'header'>
          <p>NASA Photo of the Day</p>
        </header>
        <div className = 'main-content'>
          <Photo
          theDate={theDate}
          theTitle={theTitle}
          theUrl={theUrl}
          theExplanation={theExplanation}
          copyright={copyright}
          />
          <p>
            {/*<LoaderTool />*/}
          </p>
        </div>

        <button>Change the date</button>
        
        <footer>
          <p>The end of this web app!!</p>
        </footer>
    </div>
  );
}

export default App;
