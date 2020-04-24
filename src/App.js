import React, {useState, useEffect} from "react";
import "./App.css";
import LoaderTool from './Components/LoaderTool/LoaderTool.js';
import Photo from './Components/Photo/Photo.js';
import axios from 'axios'
import Header from './Components/Header';
import Footer from './Components/Footer';

const api_key ='IOUwredz2cVdPgoUZMg9d7OlGyAZjtyM8JY03v5J';
/* const url = "https://api.nasa.gov/planetary/apod?api_key=IOUwredz2cVdPgoUZMg9d7OlGyAZjtyM8JY03v5J"; */
const initialFormValues = {
  date: " "
}

/* //url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${initialFormValues}`; */


function App() {

  const [theDate, setDate] = useState();

  const [theUrl, setUrl] = useState();

  const [theTitle, setTitle] =useState();

  const [theExplanation, setExplanation] = useState();

  const [copyright, setCopyRight] = useState();

  const [formValues, setFormValues] =useState(initialFormValues)


  const onInputChange = event => {
    const inputDate = event.target.date
    const inputValue = event.target.value

    setFormValues({...formValues, [inputDate]: inputValue})
  }

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
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
        <Header className = 'header'>
          <p>NASA Photo of the Day</p>
        </Header>
        <div className = 'main-content'>
          <Photo
          theDate={theDate}
          theTitle={theTitle}
          theUrl={theUrl}
          theExplanation={theExplanation}
          copyright={copyright}
          />
        </div>

        {/* <input name='date' value={formValues.date} onChange={onInputChange}></input> */}
        
        <Footer>
          <p>The end of this web app!!</p>
        </Footer>
    </div>
  );
}

export default App;
